import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const button = (props) => {
  return (
    <div>
      <Box sx={{ m: 2 }} />
      <Button variant="outlined" onClick={props.onClick}>
        {props.ButtonName}
      </Button>
    </div>
  );
};

export default button;
