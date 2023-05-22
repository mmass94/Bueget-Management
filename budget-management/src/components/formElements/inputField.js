import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <span>
      <TextField
        variant="outlined"
        label={props.label}
        required
        type={props.type}
        size="small"
        id={props.id}
        onChange={props.onChange}
        value={props.value}
      />
    </span>
  );
};

export default TextInput;
