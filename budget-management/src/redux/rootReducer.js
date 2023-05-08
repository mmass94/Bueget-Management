//here we combine all reducers
import { combineReducers } from "redux";
import ExpensesReducer from "./expenses/expensesReducer";

const rootreducer = combineReducers({
  expense: ExpensesReducer,
});

export default rootreducer;
