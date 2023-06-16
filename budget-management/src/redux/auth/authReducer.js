import { SIGN_UP, SIGN_IN, SIGN_OUT } from "./authTypes";
import bcrypt from "bcryptjs";

const initialState = {
  users: [],
  error: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      const newUser = {
        ...action.payload,
        isAuthenticated: false,
      };
      return {
        ...state,
        users: [...state.users, newUser],
        error: null,
      };

    case SIGN_IN:
      const { email, password } = action.payload;
      const users = state.users.map((user) => {
        if (user.email === email) {
          const passwordMatch = bcrypt.compareSync(password, user.password);
          return {
            ...user,
            isAuthenticated: passwordMatch,
          };
        } else {
          return {
            ...user,
            isAuthenticated: false,
          };
        }
      });

      const authenticatedUser = users.find((user) => user.isAuthenticated);
      if (authenticatedUser) {
        return {
          ...state,
          users,
          error: null,
          isAuthenticated: true,
        };
      } else {
        return {
          ...state,
          users,
          error: "Invalid email or password",
          isAuthenticated: false,
        };
      }

    case SIGN_OUT:
      return {
        ...state,
        users: state.users.map((user) => ({
          ...user,
          isAuthenticated: false,
        })),
        error: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;
