import { ADD_EXPENSE } from "./expensesTypes";

const initialState = {
  expenses: [
    {
      // amount: 0,
      // category: "",
      // comment: "",
      // dateAndTime: "",
    },
  ],
};

function expenseReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        expenses: [
          ...state.expenses,
          {
            amount: action.payload.amount,
            category: action.payload.category,
            comment: action.payload.comment,
            dateAndTime: action.payload.dateAndTime,
          },
        ],
      };
    default:
      return state;
  }
}

export default expenseReducer;
