import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAccount, signOut } from "../../redux/index";
import InputField from "../formElements/inputField";
import Button from "../formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import AccountsTable from "./accountsTable";

function AddAccountForm() {
  const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z-]+$/;

  const [nameinput, setNameinput] = useState("");
  const [amountinput, setAmountinput] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  // const Expenses = useSelector((state) => state.expense.expenses);
  const Accounts = useSelector((state) => state.account.accounts);

  const handleAmountInputChange = (event) => {
    setAmountinput(event.target.value);
  };

  const handleNameInputChange = (event) => {
    // setNameinput(event.target.value);
    const inputValue = event.target.value;
    const alphabetsOnly = inputValue.replace(/[^A-Za-z]/g, ""); // Remove non-alphabet characters

    // Update the name input value
    setNameinput(alphabetsOnly);
  };

  const handleClick = () => {
    const AlreadExistBankName = Accounts.some(
      (account) => account.name === nameinput
    );

    console.log("value is", AlreadExistBankName);

    const now = new Date();
    const dateTimeString = now.toLocaleString();
    if (amountinput > 0 && nameinput !== "" && !AlreadExistBankName) {
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
            Please make sure that the Bank Name and Balance are correctly
            entered and that the Bank Name is entered before!
          </MuiAlert>
        </Snackbar>
      ) : (
        ""
      )}
      <Box sx={{ m: 3 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "16px",
        }}
      ></Box>
      <Grid container>
        <Grid item xs={12} md={3} l={3}>
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

        <Grid item xs={12} md={3} l={3}>
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

        <Grid item xs={2} md={2} l={12}>
          <Button
            ButtonName={"Add account"}
            onClick={handleClick}
            style={{ marginBottom: "10px" }}
          >
            {" "}
          </Button>
        </Grid>
        <Grid item xs={12} md={3} l={3}>
          <AccountsTable />
        </Grid>
      </Grid>
    </div>
  );
}

export default AddAccountForm;
