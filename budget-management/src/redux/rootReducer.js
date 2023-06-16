//here we combine all reducers
import { combineReducers } from "redux";
import ExpensesReducer from "./expenses/expensesReducer";
import AccountssReducer from "./accounts/accountsReducer";
import AuthReducer from "./auth/authReducer";

const rootreducer = combineReducers({
  expense: ExpensesReducer,
  account: AccountssReducer,
  auth: AuthReducer,
});

export default rootreducer;
