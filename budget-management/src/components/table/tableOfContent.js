import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function TableOfContent() {
  const Expenses = useSelector((state) => state.expense.expenses);
  console.log("expenses are:", Expenses);
  console.log("expenses type is:", typeof Expenses);

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
          </TableRow>
          <TableBody>
            {Expenses.map((expense) => (
              <TableRow>
                <TableCell align="middle">{expense.amount}</TableCell>
                <TableCell align="middle">{expense.category}</TableCell>
                <TableCell align="middle">{expense.comment}</TableCell>
                <TableCell align="middle">{expense.dateAndTime}</TableCell>
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
