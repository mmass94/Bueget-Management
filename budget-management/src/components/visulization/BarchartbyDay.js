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
import moment from "moment";

const BarChartComponent = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const aggregatedExpenses = expenses.reduce(
    (acc, { amount, dateAndTime, ...rest }) => {
      const day = moment(dateAndTime, "M/D/YYYY, h:mm:ss A").format(
        "YYYY-MM-DD"
      ); // Format date to extract day
      if (!acc[day]) {
        acc[day] = { amount: 0, date: day, ...rest };
      }
      acc[day].amount += parseInt(amount);
      return acc;
    },
    {}
  );

  const resultArray = Object.values(aggregatedExpenses);

  return (
    <div>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p className="heading">Expenses per day</p>
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
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#82ca9d" />
          </BarChart>
        </Grid>
      </Grid>
    </div>
  );
};

export default BarChartComponent;
