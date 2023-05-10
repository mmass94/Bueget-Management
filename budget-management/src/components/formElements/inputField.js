import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const TextInput = (props) => {
  return (
    <span>
      <InputLabel>{props.label}</InputLabel>
      <Input
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        startAdornment={
          <InputAdornment position="start">{props.prefix}</InputAdornment>
        }
      />
    </span>
  );
};

export default TextInput;
