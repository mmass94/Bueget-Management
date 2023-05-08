import { ADD_EXPENSE } from "./ADD_EXPENSE";

export const addExpense = (amount, category, comment, dateAndTime) => {
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
