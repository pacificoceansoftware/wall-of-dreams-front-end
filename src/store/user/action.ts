import * as TYPE from "./type";
import axios from "axios";
export const URL = "https://wall-of-dreams-back-end.herokuapp.com";
export const LOCAL = "http://localhost:5000";
export function GetUserAction(emailAddress: string, password: string) {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.GET_USER_REQUEST,
    });

    const user = {
      emailAddress,
      password,
    };

    axios
      .get(LOCAL + "/api/user", {params: user})
      .then(({ data }) => {
        dispatch({
          type: TYPE.GOT_USER,
          user: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: TYPE.GET_USER_FAIL,
          payload: error,
        })
      );
  };
}

export function SaveUserAction(firstName: string, lastName: string, emailAddress: string, password: string) {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.SAVE_USER_REQUEST,
    });

    const newUser = {
      firstName,
      lastName,
      emailAddress,
      password,
    };
    axios
      .post(LOCAL + "/api/user/add", newUser)
      .then(() => {
        dispatch({
          type: TYPE.SAVE_USER_FAIL,
          user: newUser,
        });
      })
      .catch((error) =>
        dispatch({
          type: TYPE.SAVE_USER_FAIL,
          payload: error,
        })
      );
  };
}
