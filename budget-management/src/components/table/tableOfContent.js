import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "../formElements/button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../redux/index";

function TableOfContent() {
  const dispatch = useDispatch();

  const Expenses = useSelector((state) => state.expense.expenses);
  console.log("expenses are:", Expenses);
  console.log("expenses type is:", typeof Expenses);

  const handleRemoveExpense = (expenseId) => {
    dispatch(removeExpense(expenseId));
  };

  return (
    <div>
      {Expenses.length > 0 ? (
        <Table>
          {/* <TableHead align="center">Expenses details</TableHead> */}
          <TableBody>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="center">Comment</TableCell>
              <TableCell align="center">Time</TableCell>
              <TableCell align="center">Delete </TableCell>
            </TableRow>
            {Expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell align="center" key={expense.id}>
                  {expense.amount}{" "}
                </TableCell>
                <TableCell align="center">{expense.category}</TableCell>
                <TableCell align="center">{expense.comment}</TableCell>
                <TableCell align="center">{expense.dateAndTime}</TableCell>

                <TableCell align="center">
                  <Button
                    onClick={() => handleRemoveExpense(expense.id)}
                    ButtonName={"Delete"}
                    color={"error"}
                    size={"small"}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        ""
      )}
    </div>
  );
}

export default TableOfContent;
