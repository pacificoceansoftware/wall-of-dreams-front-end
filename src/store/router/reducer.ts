import * as TYPE from "./type";

const initialState: TYPE.routerState = {
  navigation: TYPE.HOME_NAVIGATION.Home,
};

export function routerReducer(
  state = initialState,
  action: TYPE.ACTION_TYPE
): TYPE.routerState {
  switch (action.type) {
    case TYPE.SET_HOME_NAVIGATION: {
      return { ...state, navigation: action.navigation };
    }
    default:
      return state;
  }
}
