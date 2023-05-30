import { ADD_ACCOUNT } from "./accountsTypes";
import { REMOVE_ACCOUNT } from "./accountsTypes";
import { UPDATE_ACCOUNT_BALANCE } from "./accountsTypes";

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

// Define the action creator function
export const updateAccountBalance = (accountId, newBalance) => {
  return {
    type: UPDATE_ACCOUNT_BALANCE,
    payload: { accountId, newBalance },
  };
};
