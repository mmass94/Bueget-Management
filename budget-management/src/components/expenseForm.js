import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../redux/index";
import InputField from "./formElements/inputField";
import Button from "./formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Selectone from "./formElements/selectone";
function ExpenseForm() {
  const amount = useSelector((state) => state.expense.amount);
  const category = useSelector((state) => state.expense.category);
  const comment = useSelector((state) => state.expense.comment);
  const dateAndTime = useSelector((state) => state.expense.dateAndTime);

  const [amountinput, setAmountinput] = useState(0);
  const [categorinput, setCategoryinput] = useState("");
  const [commentinput, setCommentinput] = useState("");
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  const dispatch = useDispatch();
  console.log(
    `date is :,
    ${dateTimeString}`
  );

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
    dispatch(
      addExpense(amountinput, categorinput, commentinput, dateTimeString)
    );
  };

  return (
    <div>
      <Grid container>
        <Box sx={{ m: 2 }} />
        <Grid item xs={12}>
          <p className="heading">Add expense</p>
        </Grid>
        <Box sx={{ b: 2 }} />
        <Grid item xs={12} md={4} l={3}>
          <InputField
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
    </div>
  );
}

export default ExpenseForm;
