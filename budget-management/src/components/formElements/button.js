import React from "react";
import Button from "@mui/material/Button";

const button = (props) => {
  return (
    <div>
      <Button variant="outlined" onClick={props.onClick}>
        {props.ButtonName}
      </Button>
    </div>
  );
};

export default button;
