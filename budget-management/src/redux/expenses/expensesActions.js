import { ADD_EXPENSE } from "./expensesTypes";
import { REMOVE_EXPENSE } from "./expensesTypes";

export const addExpense = (amount, bank, category, comment, dateAndTime) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      amount,
      bank, // foreign key
      category,
      comment,
      dateAndTime,
    },
  };
};

export const removeExpense = (expenseId) => ({
  type: REMOVE_EXPENSE,
  payload: expenseId,
});

// actions.js
export const updateExpenses = (expenses) => ({
  type: "UPDATE_EXPENSES",
  payload: expenses,
});
