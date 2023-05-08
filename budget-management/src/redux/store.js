import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootreducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
const store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
