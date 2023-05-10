import { ADD_EXPENSE } from "./expensesTypes";

export const addExpense = (amount = 0, category, comment, dateAndTime) => {
  return {
    type: ADD_EXPENSE,
    payload: {
      amount,
      category,
      comment,
      dateAndTime,
    },
  };
};
