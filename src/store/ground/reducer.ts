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
      return { ...state, dreams: action.dreams };
    }
    case TYPE.DREAM_ADDED: {
      return { ...state, dreams: [...state.dreams, action.dream] };
    }
    default:
      return state;
  }
}

