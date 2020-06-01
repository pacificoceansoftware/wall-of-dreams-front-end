import * as TYPE from "./type";

const initialState: TYPE.homeState = {
  signState: TYPE.SIGN_STATE.SIGN_IN,
  openSign: false,
  anchorEl: null,
};

export function homeReducer(
  state = initialState,
  action: any
): TYPE.homeState {
  switch (action.type) {
    case TYPE.SET_SIGN_STATE: {
      return { ...state, signState: action.payload };
    }
    case TYPE.SET_OPEN_SIGN: {
      return {...state, openSign: action.payload};
    }
    case TYPE.SET_ANCHOR_ELEMENT: {
      return {...state, anchorEl: action.payload};
    }
    default:
      return state;
  }
}
