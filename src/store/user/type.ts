export interface UserState {
  firstName: string;
  lastName: string;
  emailAddress: string;
  dream: string;
  isJoin: boolean;
}

export const SAVE_USER_REQUEST = "SAVE_USER_REQUEST";
export const SAVED_USER = "SAVED_USER";
export const SAVE_USER_FAIL = "SAVE_USER_FAIL";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GOT_USER = "GET_USER";
export const GET_USER_FAIL = "GET_USER_FAIL";
export const SET_JOIN = "SET_JOIN";
export const SET_DREAM = "SET_DREAM";

interface ISetJoin {
  type: typeof SET_JOIN;
  payload: boolean;
}

interface ISetDream {
  type: typeof SET_DREAM;
  payload: string;
}

export type ACTION_TYPE = ISetJoin | ISetDream;
