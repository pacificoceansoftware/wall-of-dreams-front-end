import * as TYPE from "./type";

export function SetEmailAddressError(error: string) {
  return {
    type: TYPE.SET_EMAIL_ADDRESS_ERROR,
    payload: error,
  };
}

export function SetPasswordError(password: string) {
  return {
    type: TYPE.SET_PASSWORD_ERROR,
    payload: password,
  };
}
