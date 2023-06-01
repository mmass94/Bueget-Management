import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const BarChartComponent = () => {
  const Expenses = useSelector((state) => state.expense.expenses);
  // const totalAmount = Expenses.reduce(
  //   (sum, { amount }) => sum + parseInt(amount),
  //   0
  // );

  // console.log("Total is:", totalAmount);

  const aggregatedExpenses = Expenses.reduce(
    (acc, { amount, category, ...rest }) => {
      if (!acc[category]) {
        acc[category] = { amount: 0, category, ...rest };
      }
      acc[category].amount += parseInt(amount);
      return acc;
    },
    {}
  );

  const resultArray = Object.values(aggregatedExpenses);

  return (
    <div>
      {Expenses.length > 0 ? (
        <Grid container alignItems="center">
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p className="heading">Expenses per Category</p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <BarChart
              width={500}
              height={300}
              data={resultArray}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#82ca9d" />
            </BarChart>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};

export default BarChartComponent;
