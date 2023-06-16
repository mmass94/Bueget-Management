import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Signin from "../users/signin";
import Signup from "../users/signup";

import { useSelector } from "react-redux";
import ReadFromJson from "../readFromJson";
import SaveTomJson from "../saveToJson";
import Grid from "@mui/material/Grid";
import TotalAmount from "../totalAmount";
export default function NavTabs() {
  //   const Accounts = useSelector((state) => state.account.accounts);
  //   const Expenses = useSelector((state) => state.expense.expenses);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Sign up " />
        <Tab
          label="Sign in"
          //   disabled={Accounts.length > 0 || Expenses.length > 0 ? false : true}
        />
      </Tabs>
      {value === 0 && <Signup />}
      {value === 1 && <Signin />}
      {/* <Grid container>
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
      </Grid> */}

      {/* {value === 3 && <SaveTomJson />}
      {value === 4 && <ReadFromJson />} */}
    </Box>
  );
}
