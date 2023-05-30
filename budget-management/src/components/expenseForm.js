import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense, updateAccountBalance } from "../redux/index";

import InputField from "./formElements/inputField";
import Button from "./formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Selectone from "./formElements/selectone";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
function ExpenseForm() {
  const [amountinput, setAmountinput] = useState("");
  const [categorinput, setCategoryinput] = useState("");
  const [commentinput, setCommentinput] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const Accounts = useSelector((state) => state.account.accounts);
  const Expenses = useSelector((state) => state.expense.expenses);

  const accountNames = [...new Set(Accounts.map((account) => account.name))]; // set removes duplicates

  const [Name, setName] = useState("");
  const accountBalance =
    Accounts.find((account) => account.name === Name)?.amount || "";
  //Search for the first element in the Accounts array that satisfies the given condition.

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const dispatch = useDispatch();

  const handleAmountInputChange = (event) => {
    setAmountinput(event.target.value);
  };

  const handleCommentInputChange = (event) => {
    setCommentinput(event.target.value);
  };

  const handleCategoryInputChange = (event) => {
    setCategoryinput(event.target.value);
  };

  const handleClick = () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    if (amountinput > 0 && categorinput !== "") {
      dispatch(
        addExpense(amountinput, categorinput, commentinput, dateTimeString)
      );

      // Find the account object corresponding to the selected Name
      const selectedAccount = Accounts.find((account) => account.name === Name);

      if (selectedAccount) {
        // Subtract the expense amount from the account balance
        const updatedBalance = selectedAccount.amount - amountinput;

        // Dispatch the updateAccountBalance action to update the account balance in Redux store
        dispatch(updateAccountBalance(selectedAccount.id, updatedBalance));
      }
      setFormSubmitted(true);
    } else {
      setError(true);
      setOpen(true);
    }
  };
  useEffect(() => {
    if (formSubmitted) {
      setAmountinput("");
      setCategoryinput("");
      setCommentinput("");
      setFormSubmitted(false);
    }
  }, [formSubmitted]);

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
            Please Make sure that Amount and Category are correctly entered !
          </MuiAlert>
        </Snackbar>
      ) : (
        ""
      )}
      <Box sx={{ m: 2 }} />

      {Accounts.length > 0 ? (
        <div>
          <Grid container>
            <Box sx={{ b: 2 }} />
            <Grid item xs={12} md={3}>
              <InputField
                color="warning"
                value={amountinput}
                type={"number"}
                placeholder={"Amount"}
                id={"standard-adornment-amount"}
                prefix={"$"}
                onChange={handleAmountInputChange}
                label={"Amount"}
              ></InputField>
            </Grid>

            <Grid item xs={12} md={3}>
              <Selectone
                onChange={handleCategoryInputChange}
                value={categorinput}
                label={"category"}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <InputField
                value={commentinput}
                type={"text"}
                placeholder={"comment"}
                prefix={""}
                onChange={handleCommentInputChange}
                label={"Comment"}
              ></InputField>
            </Grid>
            <Box sx={{ m: 2 }} />

            <Grid item xs={12} md={3}>
              <InputLabel id="name-select-label">Name</InputLabel>
              <Select
                labelId="name-select-label"
                id="name-select"
                value={Name}
                label="Account Name"
                onChange={handleNameChange}
              >
                {accountNames.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} md={3}>
              <InputField
                disabled={"disabled"}
                value={accountBalance}
                type="text"
                placeholder="Account Balance"
                prefix=""
                label="Account Balance"
                readOnly
                variant={"filled"}
              />
            </Grid>

            <Box sx={{ m: 2 }} />

            <Grid item xs={12} md={12} l={12}>
              <Button
                ButtonName={"Add expense"}
                onClick={handleClick}
                style={{ marginBottom: "10px" }}
              >
                {" "}
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        ""
      )}

      {/* <Test /> */}
    </div>
  );
}

export default ExpenseForm;
