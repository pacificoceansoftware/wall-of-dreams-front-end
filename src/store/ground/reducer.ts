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
    case TYPE.ADD_DREAM: {
      return addDream(state, action.payload);
    }
    default:
      return state;
  }
}

function addDream(state: TYPE.groundState, dream: string){
  let input: string[] = [];
  input.push(dream);
  let dreams = state.dreams;
  dreams.push(input);
  return {...state, dreams: dreams}
}
