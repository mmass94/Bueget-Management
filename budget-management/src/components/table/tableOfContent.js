import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "../formElements/button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { removeExpense } from "../../redux/index";
import { removeExpense } from "../../redux";

function TableOfContent() {
  const dispatch = useDispatch();
  const expensesPerPage = 6; // Number of expenses to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const Expenses = useSelector((state) => state.expense.expenses);

  const handleRemoveExpense = (expenseId) => {
    dispatch(removeExpense(expenseId));
  };

  // Reverse the order of expenses array
  const reversedExpenses = [...Expenses].reverse();

  // Calculate the index range for the expenses to display on the current page
  const offset = currentPage * expensesPerPage;
  const expensesToDisplay = reversedExpenses.slice(
    offset,
    offset + expensesPerPage
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(reversedExpenses.length / expensesPerPage);

  // Handle page change event
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate an array of page numbers for rendering the pagination links
  const pageNumbers = [];
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {Expenses.length > 0 ? (
        <>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Amount</TableCell>
                <TableCell>Category</TableCell>
                <TableCell align="center">Comment</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
              {expensesToDisplay.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell align="center" key={expense.id}>
                    {expense.amount}
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
          <div className="pagination">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? "active" : ""}
              >
                {pageNumber + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default TableOfContent;
