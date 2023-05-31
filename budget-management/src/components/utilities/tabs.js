import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Addaccount from "../accounts/addAcount";
import ExpenseForm from "../expenseForm";
import BarChartComp from "../visulization/barChart";
import TableofContents from "../table/tableOfContent";
import { useSelector } from "react-redux";

export default function NavTabs() {
  const Accounts = useSelector((state) => state.account.accounts);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log("Accounts length is ", Accounts.length);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Add Accounts" />
        <Tab
          label="Add expenses"
          disabled={Accounts.length > 0 ? false : true}
        />
        <Tab label="Charts" disabled={Accounts.length > 0 ? false : true} />
      </Tabs>

      {value === 0 && <Addaccount />}
      {value === 1 && <ExpenseForm />}
      {value === 1 && <TableofContents />}

      {value === 2 && <BarChartComp />}
    </Box>
  );
}
