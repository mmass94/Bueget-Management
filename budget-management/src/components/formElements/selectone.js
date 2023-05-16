import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selectone(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.category}
          onChange={props.onChange}
          label={props.label}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Food & Drink"}>Food & Drink</MenuItem>
          <MenuItem value={"Rent"}>Rent</MenuItem>
          <MenuItem value={"Bills"}>Bills</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          <MenuItem value={"Health"}>Health</MenuItem>
          <MenuItem value={"Clothing"}>Clothing</MenuItem>
          <MenuItem value={"Transportation"}>Transportation</MenuItem>
          <MenuItem value={"Cafe"}>Cafe</MenuItem>
          <MenuItem value={"Gifts"}>Gifts</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
