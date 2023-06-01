import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function TotalAmount() {
  const Expenses = useSelector((state) => state.expense.expenses);
  const totalAmount = Expenses.reduce(
    (sum, { amount }) => sum + parseInt(amount),
    0
  );
  return (
    <Grid container spacing={0} justify="center" alignItems="center">
      <Grid item md={12}>
        <Box>
          <p className="totalAmount">
            Total Expenses: <b>{totalAmount} </b> <em>SAR</em>
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TotalAmount;
