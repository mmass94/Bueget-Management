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
  const accounts = useSelector((state) => state.account.accounts);

  const aggregatedExpenses = expenses.reduce((acc, { amount, bank }) => {
    const account = accounts.find((acc) => acc.name === bank);
    const accountName = account ? account.name : "Unknown Account";

    if (!acc[accountName]) {
      acc[accountName] = { amount: 0, account: accountName };
    }
    acc[accountName].amount += parseInt(amount);
    return acc;
  }, {});

  const resultArray = Object.values(aggregatedExpenses);

  return (
    <div>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p className="heading">Expenses per account</p>
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
            <XAxis dataKey="account" />
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
