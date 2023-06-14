import React, { useState, useEffect } from "react";
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
import { categories } from "./formElements/categories";

function ExpenseForm() {
  const [amountinput, setAmountinput] = useState("");
  const [categorinput, setCategoryinput] = useState("");
  const [commentinput, setCommentinput] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const Accounts = useSelector((state) => state.account.accounts);
  const Expenses = useSelector((state) => state.expense.expenses);
  const accountNames = [...new Set(Accounts.map((account) => account.name))];
  const [Name, setName] = useState("");
  const accountBalance =
    Accounts.find((account) => account.name === Name)?.amount || "";

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
    if (
      amountinput > 0 &&
      categorinput !== "" &&
      Name !== "" &&
      accountBalance > !-3000
    ) {
      dispatch(
        addExpense(
          amountinput,
          Name,
          categorinput,
          commentinput,
          dateTimeString
        )
      );
      const selectedAccount = Accounts.find((account) => account.name === Name);
      if (selectedAccount) {
        const updatedBalance = selectedAccount.amount - amountinput;
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
            Please make sure that the Account , Expense amount and category are
            correctly entered and your balcnce is not less than 3000!
          </MuiAlert>
        </Snackbar>
      ) : (
        ""
      )}

      <Box sx={{ m: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Selectone
            onChange={handleNameChange}
            value={Name}
            label={"Account Name"}
            options={accountNames}
          />
        </Grid>

        <Grid item xs={12} md={2}>
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

        <Grid item xs={12} md={2}>
          <InputField
            color="warning"
            value={amountinput}
            type={"number"}
            placeholder={"Amount"}
            id={"standard-adornment-amount"}
            prefix={"$"}
            onChange={handleAmountInputChange}
            label={"Amount"}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Selectone
            onChange={handleCategoryInputChange}
            value={categorinput}
            label={"Category"}
            options={categories}
          />
        </Grid>

        <Grid item xs={12} md={2}>
          <InputField
            value={commentinput}
            type={"text"}
            placeholder={"Comment"}
            prefix={""}
            onChange={handleCommentInputChange}
            label={"Comment"}
          />
        </Grid>

        <Grid item xs={12} md={12} l={12}>
          <Button
            ButtonName={"Add Expense"}
            onClick={handleClick}
            style={{ marginBottom: "10px" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ExpenseForm;
