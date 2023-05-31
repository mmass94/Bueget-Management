import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selectone(props) {
  const { value, onChange, label, options } = props;

  return (
    <div>
      <FormControl sx={{ minWidth: 220 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          style={{ fontSize: "13px" }} // Customize the font size
        >
          {props.label}
        </InputLabel>
        <Select
          sx={{ height: 45 }}
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
          label={label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
