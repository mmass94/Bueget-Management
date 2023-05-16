import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = (props) => {
  return (
    <span>
      {/* <InputLabel>{props.label}</InputLabel> */}

      <TextField
        variant="outlined"
        label={props.label}
        // label="Outlined"
        required
        type={props.type}
        size="small"
        id={props.id}
        onChange={props.onChange}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">{props.prefix}</InputAdornment>
        //   ),
        // }}
      />
    </span>
  );
};

export default TextInput;
