import * as TYPE from "./type";

const initialState: TYPE.homeState = {
  navigation: TYPE.HOME_NAVIGATION.Home,
};

export function homeReducer(
  state = initialState,
  action: TYPE.ACTION_TYPE
): TYPE.homeState {
  switch (action.type) {
    case TYPE.SET_HOME_NAVIGATION: {
      return { ...state, navigation: action.navigation };
    }
    default:
      return state;
  }
}
