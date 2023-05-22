import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/index";
import InputField from "./formElements/inputField";
import Button from "./formElements/button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Selectone from "./formElements/selectone";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
function ExpenseForm() {
  // const amount = useSelector((state) => state.expense.amount);
  // const category = useSelector((state) => state.expense.category);
  // const comment = useSelector((state) => state.expense.comment);

  const [amountinput, setAmountinput] = useState("");
  const [categorinput, setCategoryinput] = useState("");
  const [commentinput, setCommentinput] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      <Grid container>
        <Box sx={{ m: 2 }} />
        <Grid item xs={12}>
          <p className="heading">Add expense</p>
        </Grid>

        <Box sx={{ b: 2 }} />
        <Grid item xs={12} md={4} l={3}>
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

        <Grid item xs={12} md={4} l={3}>
          <Selectone
            onChange={handleCategoryInputChange}
            value={categorinput}
            label={"category"}
          />
        </Grid>

        <Grid item xs={12} md={4} l={3}>
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

      {/* <Test /> */}
    </div>
  );
}

export default ExpenseForm;
