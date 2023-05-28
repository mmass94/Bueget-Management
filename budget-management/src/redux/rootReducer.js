//here we combine all reducers
import { combineReducers } from "redux";
import ExpensesReducer from "./expenses/expensesReducer";
import AccountssReducer from "./accounts/accountsReducer";

const rootreducer = combineReducers({
  expense: ExpensesReducer,
  account: AccountssReducer,
});

export default rootreducer;
