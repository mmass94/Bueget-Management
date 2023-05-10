import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
const TextInput = (props) => {
  return (
    <div>
      {/* <input
        value={props.amount}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      /> */}

      <InputLabel>Amount</InputLabel>
      <Input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        startAdornment={
          <InputAdornment position="start">{props.prefix}</InputAdornment>
        }
      />
    </div>
  );
};

export default TextInput;
