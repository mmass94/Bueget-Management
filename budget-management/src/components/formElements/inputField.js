import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  console.log("value from Text Feild is ", props.value);

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
        // key={props.resetKey}
      />
    </span>
  );
};

export default TextInput;
