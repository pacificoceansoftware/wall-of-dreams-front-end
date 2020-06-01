export enum SIGN_STATE {
  SIGN_IN,
  SIGN_UP,
  PROFILE,
}

export interface homeState {
  signState: SIGN_STATE,
  openSign: boolean,
  anchorEl: HTMLButtonElement | null,
}

export const SAVE_USER_FAIL = "SAVE_USER_FAIL";
export const SET_SIGN_STATE =  "SET_SIGN_STATE";
export const SET_OPEN_SIGN = "SET_OPEN_SIGN";
export const SET_ANCHOR_ELEMENT = "SET_ANCHOR_ELEMENT"; 

interface ISetSignState {
  type: typeof SET_SIGN_STATE,
  payload: SIGN_STATE,
}

export type ACTION_TYPE = ISetSignState;
