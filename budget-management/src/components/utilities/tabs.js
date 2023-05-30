import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Addaccount from "../accounts/addAcount";
import ExpenseForm from "../expenseForm";
import BarChartComp from "../visulization/barChart";
import TableofContents from "../table/tableOfContent";

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Add Accounts" />
        <Tab label="Add expenses" />
        <Tab label="Charts" />
      </Tabs>

      {value === 0 && <Addaccount />}
      {value === 1 && <ExpenseForm />}
      {value === 1 && <TableofContents />}

      {value === 2 && <BarChartComp />}
    </Box>
  );
}
