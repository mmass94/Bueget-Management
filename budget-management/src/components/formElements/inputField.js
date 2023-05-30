import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <span>
      <TextField
        variant={props.variant}
        label={props.label}
        required
        type={props.type}
        size="small"
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        disabled={props.disabled}
      />
    </span>
  );
};

export default TextInput;
