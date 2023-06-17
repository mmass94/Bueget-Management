import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Signin from "../users/signin";
import Signup from "../users/signup";
export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab label="Sign in " />
        <Tab label="Sign up" />
      </Tabs>
      {value === 0 && <Signin />}

      {value === 1 && <Signup />}
    </Box>
  );
}
