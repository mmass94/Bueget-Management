import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const button = (props) => {
  return (
    <div>
      <Box sx={{ m: 2 }} />
      <Button
        variant="outlined"
        onClick={props.onClick}
        color={props.color}
        size={props.size}
      >
        {props.ButtonName}
      </Button>
    </div>
  );
};

export default button;
