import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "../formElements/button";
import Box from "@mui/material/Box";
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
          <TableHead align="middle">Expenses details</TableHead>

          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="middle">Comment</TableCell>
            <TableCell align="middle">Time</TableCell>
            {/* <TableCell align="middle">Update </TableCell> */}
            <TableCell align="middle">Delete </TableCell>
          </TableRow>
          <TableBody>
            {Expenses.map((expense) => (
              <TableRow>
                <TableCell align="middle">{expense.amount}</TableCell>
                <TableCell align="middle">{expense.category}</TableCell>
                <TableCell align="middle">{expense.comment}</TableCell>
                <TableCell align="middle">{expense.dateAndTime}</TableCell>
                {/* <TableCell align="middle">
                  <Button
                    ButtonName={"Update"}
                    color={"secondary"}
                    size={"small"}
                  ></Button>
                </TableCell> */}

                <TableCell align="middle">
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
