import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "../formElements/button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function AccountsTable() {
  //   const dispatch = useDispatch();

  const Accounts = useSelector((state) => state.account.accounts);

  //   const handleRemoveExpense = (expenseId) => {
  //     dispatch(removeExpense(expenseId));
  //   };

  return (
    <div>
      {Accounts.length > 0 ? (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Total Amount</TableCell>
            </TableRow>
            {Accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell align="center">{account.name}</TableCell>
                <TableCell align="center">{account.amount}</TableCell>

                <TableCell align="center">
                  {/* <Button
                    onClick={() => handleRemoveExpense(expense.id)}
                    ButtonName={"Delete"}
                    color={"error"}
                    size={"small"}
                  ></Button> */}
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

export default AccountsTable;
