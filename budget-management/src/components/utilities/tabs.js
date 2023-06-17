import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Addaccount from "../accounts/addAcount";
import ExpenseForm from "../expenseForm";
import BarChartComp from "../visulization/barChart";
import BarchartbyDay from "../visulization/BarchartbyDay";
import BarchartbyAccount from "../visulization/barchartByAccount";
import TableofContents from "../table/tableOfContent";
import { useSelector } from "react-redux";
import ReadFromJson from "../readFromJson";
import SaveTomJson from "../saveToJson";
import Grid from "@mui/material/Grid";
import TotalAmount from "../totalAmount";
import SignOutButton from "../users/signout";

export default function NavTabs() {
  const Accounts = useSelector((state) => state.account.accounts);
  const Expenses = useSelector((state) => state.expense.expenses);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid item xs={2} md={2} l={12}>
        <SignOutButton />
      </Grid>

      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Add Accounts" />
        <Tab
          label="Add expenses"
          disabled={Accounts.length > 0 || Expenses.length > 0 ? false : true}
        />
        <Tab label="Charts" disabled={Expenses.length > 0 ? false : true} />
        <Tab
          label="Export Expenses"
          disabled={Accounts.length > 0 && Expenses.length > 0 ? false : true}
        />
        <Tab label="Load Expenses" />
      </Tabs>
      {value === 0 && <Addaccount />}
      {value === 1 && <ExpenseForm />}
      {value === 1 && <TableofContents />}
      <Grid container>
        <Grid item xs={12} md={6}>
          {value === 2 && <BarChartComp />}
        </Grid>

        <Grid item xs={12} md={6}>
          {value === 2 && <BarchartbyDay />}
        </Grid>
        <Grid item xs={12} md={6}>
          {value === 2 && <BarchartbyAccount />}
        </Grid>

        {value === 2 && <TotalAmount />}
      </Grid>

      {value === 3 && <SaveTomJson />}
      {value === 4 && <ReadFromJson />}
    </Box>
  );
}
