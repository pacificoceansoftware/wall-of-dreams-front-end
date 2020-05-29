import * as TYPE from "./type";
import axios from "axios";
import { SetHomeNavigation } from "../router/action";
import { HOME_NAVIGATION } from "../router/type";

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
      .post(process.env.API_URL + "/api/user/search", user)
      .then(({ data }) => {
        if (!data || !data.length) {
          dispatch({
            type: TYPE.GET_USER_FAIL,
            payload: "User not found",
          });
        } else {
          dispatch({
            type: TYPE.GOT_USER,
            payload: data,
          });
          dispatch(SetHomeNavigation(HOME_NAVIGATION.Home));
          dispatch(SetJoin(true));
        }
      })
      .catch((error) =>
        dispatch({
          type: TYPE.GET_USER_FAIL,
          payload: error,
        })
      );
  };
}

export function SaveUserAction(
  firstName: string,
  lastName: string,
  emailAddress: string,
  password: string,
  dream: string
) {
  return function (dispatch: any) {
    dispatch({
      type: TYPE.SAVE_USER_REQUEST,
    });

    const newUser = {
      firstName,
      lastName,
      emailAddress,
      password,
      dream,
    };

    axios
      .post(process.env.API_URL + "/api/user/add", newUser)
      .then(({ data }) => {
        dispatch({
          type: TYPE.SAVED_USER,
          firstName,
          lastName,
          emailAddress,
          dream,
        });

        dispatch(SetHomeNavigation(HOME_NAVIGATION.SignIn));
      })
      .catch((error) =>
        dispatch({
          type: TYPE.SAVE_USER_FAIL,
          payload: error,
        })
      );
  };
}

export function SetJoin(isJoin: boolean): TYPE.ACTION_TYPE {
  return {
    type: TYPE.SET_JOIN,
    payload: isJoin,
  };
}

export function SetDream(dream: string): TYPE.ACTION_TYPE {
  return {
    type: TYPE.SET_DREAM,
    payload: dream,
  };
}
