import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../redux/index";
import InputField from "./formElements/inputField";
import Button from "./formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Selectone from "./formElements/selectone";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
function ExpenseForm() {
  const amount = useSelector((state) => state.expense.amount);
  const category = useSelector((state) => state.expense.category);
  const comment = useSelector((state) => state.expense.comment);

  const [amountinput, setAmountinput] = useState(null);
  const [categorinput, setCategoryinput] = useState(null);
  const [commentinput, setCommentinput] = useState(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);

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
    amountinput !== null && categorinput !== null
      ? dispatch(
          addExpense(amountinput, categorinput, commentinput, dateTimeString)
        )
      : setError(true);
  };

  // const resetter = () => {
  //   setAmountinput(null);
  //   setCategoryinput(null);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  console.log("Error Value", error);
  console.log("amountinput  Value is :", amountinput);
  console.log("categor Value", categorinput);

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
      <Grid container>
        <Box sx={{ m: 2 }} />
        <Grid item xs={12}>
          <p className="heading">Add expense</p>
        </Grid>

        <Box sx={{ b: 2 }} />
        <Grid item xs={12} md={4} l={3}>
          <InputField
            color="warning"
            amount={amount}
            type={"number"}
            placeholder={"Amount"}
            id={"standard-adornment-amount"}
            prefix={"$"}
            onChange={handleAmountInputChange}
            label={"Amount"}
          ></InputField>
        </Grid>

        <Grid item xs={12} md={4} l={3}>
          <Selectone
            onChange={handleCategoryInputChange}
            value={category}
            label={"category"}
          />
        </Grid>

        <Grid item xs={12} md={4} l={3}>
          <InputField
            comment={comment}
            type={"text"}
            placeholder={"comment"}
            prefix={""}
            onChange={handleCommentInputChange}
            label={"Comment"}
          ></InputField>
        </Grid>

        <Box sx={{ m: 2 }} />

        <Grid item xs={12} md={12} l={12}>
          <Button
            ButtonName={"Add expense"}
            onClick={handleClick}
            style={{ marginBottom: "10px" }}
          >
            {" "}
            Add Expense
          </Button>
        </Grid>
      </Grid>

      {/* <Test /> */}
    </div>
  );
}

export default ExpenseForm;
