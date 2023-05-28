import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../../redux/index";
import InputField from "../formElements/inputField";
import Button from "../formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import AccountsTable from "./accountsTable";
function AddAccountFrom() {
  const [nameinput, setNameinput] = useState("");
  const [amountinput, setAmountinput] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const Expenses = useSelector((state) => state.expense.expenses);
  const Accounts = useSelector((state) => state.account.accounts);

  const handleAmountInputChange = (event) => {
    setAmountinput(event.target.value);
  };

  const handleNameInputChange = (event) => {
    setNameinput(event.target.value);
  };

  const handleClick = () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    if (amountinput > 0 && setNameinput !== "") {
      dispatch(addAccount(nameinput, amountinput, dateTimeString));
      setFormSubmitted(true);
    } else {
      setError(true);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      setAmountinput("");
      setNameinput("");

      setFormSubmitted(false);
    }
    if (Accounts.length > 3) {
      console.log("Accounts can not be more than 3");
    }
  }, [formSubmitted, Accounts.length]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {error ? (
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
          align="middle"
        >
          <MuiAlert onClose={handleClose} severity="error">
            Please Make sure that Bank Name and Balance are correctly entered !
          </MuiAlert>
        </Snackbar>
      ) : (
        ""
      )}
      <Grid container>
        <Box sx={{ m: 2 }} />
        <Grid item xs={12}>
          <p className="heading">Add an Account</p>
        </Grid>

        <Grid item xs={12} md={4} l={3}>
          <InputField
            value={nameinput}
            type={"text"}
            placeholder={"Bank Name"}
            prefix={""}
            onChange={handleNameInputChange}
            label={"Bank Name"}
          ></InputField>
        </Grid>

        <Box sx={{ b: 2 }} />

        <Grid item xs={12} md={4} l={3}>
          <InputField
            color="warning"
            value={amountinput}
            type={"number"}
            placeholder={"Balance"}
            id={"standard-adornment-amount"}
            prefix={"$"}
            onChange={handleAmountInputChange}
            label={"Balance"}
          ></InputField>
        </Grid>

        <Grid item xs={12} md={4} l={3}>
          <AccountsTable />
        </Grid>

        <Grid item xs={12} md={12} l={12}>
          <Button
            ButtonName={"Add account"}
            onClick={handleClick}
            style={{ marginBottom: "10px" }}
          >
            {" "}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddAccountFrom;
