import { SIGN_UP, SIGN_IN, SIGN_OUT } from "./authTypes";

export const signUp = (userData) => {
  // Implement sign-up logic here
  return {
    type: SIGN_UP,
    payload: userData,
  };
};

export const signIn = (userData) => {
  // Implement sign-in logic here
  return {
    type: SIGN_IN,
    payload: userData,
  };
};

export const signOut = () => {
  // Implement sign-out logic here
  return {
    type: SIGN_OUT,
  };
};
