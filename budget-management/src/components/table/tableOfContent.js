import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function TableOfContent() {
  const Expenses = useSelector((state) => state.expense.expenses);
  console.log("expenses are:", Expenses);
  console.log("expenses type is:", typeof Expenses);

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell align="right">Comment</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Expenses.map((expense) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {"hi"}
              </TableCell>
              <TableCell align="right">{expense.amount}</TableCell>
              <TableCell align="right">{expense.category}</TableCell>
              <TableCell align="right">{expense.comment}</TableCell>
              <TableCell align="right">{expense.dateAndTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default TableOfContent;
