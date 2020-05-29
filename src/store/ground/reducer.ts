import * as TYPE from "./type";

const initialState: TYPE.groundState = {
  dreams: [],
};

export function groundReducer(
  state = initialState,
  action: any,
): TYPE.groundState {
  switch (action.type) {
    case TYPE.DREAM_RECEIVED: {
      return { ...state, dreams: action.payload };
    }
    default:
      return state;
  }
}
