import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense } from "../redux/index";
import TextInput from "./formElements/inputField";
import Button from "./formElements/button";
function ExpenseForm() {
  const amount = useSelector((state) => state.expense.amount);
  const category = useSelector((state) => state.expense.category);
  const comment = useSelector((state) => state.expense.comment);
  const dateAndTime = useSelector((state) => state.expense.dateAndTime);

  const [amountinput, setAmountinput] = useState(0);

  const dispatch = useDispatch();
  console.log("amountinput is ", amountinput);

  const handleInputChange = (event) => {
    setAmountinput(event.target.value);
  };

  const handleClick = () => {
    dispatch(addExpense(amountinput));
  };

  return (
    <div>
      {/* <h2>amount -{amount}</h2> */}
      <TextInput
        amount={amount}
        type={"number"}
        placeholder={"Amount"}
        id={"standard-adornment-amount"}
        prefix={"$"}
        onChange={handleInputChange}
      ></TextInput>

      <Button
        ButtonName={"Add expense"}
        onClick={handleClick}
        style={{ marginBottom: "10px" }}
      >
        {" "}
        Add Expense
      </Button>
    </div>
  );
}

export default ExpenseForm;
