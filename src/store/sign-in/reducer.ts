import * as TYPE from "./type";

const initialState: TYPE.UserState = {
  emailAddressError: "",
  passwordError: "",
};

export function signInReducer(
  state = initialState,
  action: any
): TYPE.UserState {
  switch (action.type) {
    case TYPE.SET_PASSWORD_ERROR: {
      return { ...state, passwordError: action.payload };
    }
    case TYPE.SET_EMAIL_ADDRESS_ERROR: {
      return { ...state, emailAddressError: action.payload };
    }
    default:
      return state;
  }
}
