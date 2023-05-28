import { ADD_ACCOUNT } from "./accountsTypes";
import { REMOVE_ACCOUNT } from "./accountsTypes";

export const addAccount = (name, amount, dateAndTime) => {
  return {
    type: ADD_ACCOUNT,
    payload: {
      name,
      amount,
      dateAndTime,
    },
  };
};

export const removeAccount = (accountId) => {
  return {
    type: REMOVE_ACCOUNT,
    payload: accountId,
  };
};

// // actions.js
// export const updateExpenses = (expenses) => ({
//   type: "UPDATE_EXPENSES",
//   payload: expenses,
// });
