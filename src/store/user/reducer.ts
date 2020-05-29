import * as TYPE from "./type";

const initialState: TYPE.UserState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  dream: "",
  isJoin: false,
};

export function userReducer(state = initialState, action: any): TYPE.UserState {
  switch (action.type) {
    case TYPE.SAVE_USER_FAIL: {
      console.log("Save Fail" + action.payload);
      return state;
    }
    case TYPE.SAVED_USER: {
      console.log("Added User");
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        emailAddress: action.emailAddress,
      };
    }
    case TYPE.GOT_USER: {
      console.log("Login Successfully");
      return state;
    }
    case TYPE.GET_USER_FAIL: {
      console.log("Login Fail" + action.payload);
      return state;
    }
    case TYPE.SET_JOIN: {
      return { ...state, isJoin: action.payload };
    }
    case TYPE.SET_DREAM: {
      return {...state, dream: action.payload};
    }
    default:
      return state;
  }
}
