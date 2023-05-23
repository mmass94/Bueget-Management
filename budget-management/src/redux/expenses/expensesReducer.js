import { ADD_EXPENSE } from "./expensesTypes";
import { REMOVE_EXPENSE } from "./expensesTypes";
import { UPDATE_EXPENSES } from "./expensesTypes";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  expenses: [],
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        expenses: [
          ...state.expenses,
          {
            id: uuidv4(), // Generate a unique ID
            amount: action.payload.amount,
            category: action.payload.category,
            comment: action.payload.comment,
            dateAndTime: action.payload.dateAndTime,
          },
        ],
      };

    case REMOVE_EXPENSE:
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return {
        ...state,
        expenses: updatedExpenses,
      };

    case UPDATE_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };

    default:
      return state;
  }
}

export default expenseReducer;
