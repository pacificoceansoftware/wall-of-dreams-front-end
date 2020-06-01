import * as TYPE from "./type";
import axios from "axios";
import { SetHomeNavigation } from "../router/action";
import { HOME_NAVIGATION } from "../router/type";
import { SetEmailAddressError } from "../sign-up/action";
import {SetSignState, SetAnchorElement} from "../home/action";
import { SIGN_STATE } from "../home/type";

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
            payload: "User not found",
          });
        } else {
          dispatch({
            type: TYPE.GOT_USER,
            payload: emailAddress,
          });
          dispatch(SetHomeNavigation(HOME_NAVIGATION.Home));
          dispatch(SetJoin(true));
          dispatch(SetAnchorElement(null));
          dispatch(SetSignState(SIGN_STATE.PROFILE));
        }
      })
      .catch(
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
      .catch((error) => {
        dispatch(SetEmailAddressError("Something wrong"));
      }
      );
  };
}

export function SaveDreamAction(emailAddress: string, dream: string)
{
  return function (dispatch: any) {
  const payload = {
    emailAddress,
    dream,
  };

  axios
    .patch(process.env.API_URL + "/api/user/addDream", payload)
    .then(({ data }) => {
    })
    .catch((error) => {
    }
    );
  }
};


export function SetJoin(isJoin: boolean) {
  return {
    type: TYPE.SET_JOIN,
    payload: isJoin,
  };
}

export function SetDream(dream: string) {
  return {
    type: TYPE.SET_DREAM,
    payload: dream,
  };
}

export function SetFirstName(firstName: string){
  return {
    type: TYPE.SET_FIRST_NAME,
    payload: firstName,
  };
}

export function SetLastName(error: string){
  return {
    type: TYPE.SET_LAST_NAME,
    payload: error,
  };
}

export function SetEmailAddress(email: string){
  return {
    type: TYPE.SET_EMAIL_ADDRESS,
    payload: email,
  }
}

export function SetPassword(password: string){
  return {
    type: TYPE.SET_PASSWORD,
    payload: password,
  }
}

