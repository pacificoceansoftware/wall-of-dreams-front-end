export interface UserState {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  dream: string;
  isJoin: boolean;
}

export const SAVE_USER_REQUEST = "SAVE_USER_REQUEST";
export const SAVED_USER = "SAVED_USER";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GOT_USER = "GET_USER";
export const SET_JOIN = "SET_JOIN";
export const SET_DREAM = "SET_DREAM";
export const SET_DREAM_ERROR = "SET_DREAM_ERROR";
export const SAVE_DREAM = "SAVE_DREAM";

export const SET_PASSWORD = "SET_PASSWORD";
export const SET_FIRST_NAME = "SET_FIRST_NAME";
export const SET_LAST_NAME = "SET_LAST_NAME";
export const SET_EMAIL_ADDRESS = "SET_EMAIL_ADDRESS";
