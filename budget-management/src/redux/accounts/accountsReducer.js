import { ADD_ACCOUNT } from "./accountsTypes";
import { REMOVE_ACCOUNT } from "./accountsTypes";
import { UPDATE_ACCOUNT_BALANCE } from "./accountsTypes";

import { v4 as uuidv4 } from "uuid";

const initialState = {
  accounts: [],
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ACCOUNT:
      return {
        accounts: [
          ...state.accounts,
          {
            id: uuidv4(), // Generate a unique ID
            name: action.payload.name,
            amount: action.payload.amount,
            dateAndTime: action.payload.dateAndTime,
          },
        ],
      };

    case REMOVE_ACCOUNT:
      const updatedAccounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      return {
        ...state,
        accounts: updatedAccounts,
      };

    case UPDATE_ACCOUNT_BALANCE:
      const { accountId, newBalance } = action.payload;

      // Find the account with the specified ID
      const updatedBalances = state.accounts.map((account) => {
        if (account.id === accountId) {
          // Update the account balance
          return { ...account, amount: newBalance };
        }
        return account;
      });
      return {
        ...state,
        accounts: updatedBalances,
      };

    default:
      return state;
  }
}

export default accountReducer;
