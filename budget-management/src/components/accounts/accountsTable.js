import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

function AccountsTable() {
  const Accounts = useSelector((state) => state.account.accounts);

  return (
    <span>
      {Accounts.length > 0 ? (
        <Table>
          <TableBody>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Total Amount
              </TableCell>
            </TableRow>
            {Accounts.map((account, index) => (
              <TableRow
                key={account.id}
                sx={{ backgroundColor: index % 2 === 0 ? "#f3f3f3" : "white" }}
              >
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
    </span>
  );
}

export default AccountsTable;
