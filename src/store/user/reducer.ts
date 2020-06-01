import * as TYPE from "./type";

const initialState: TYPE.UserState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  dream: "",
  password: "",
  isJoin: false,
};

export function userReducer(state = initialState, action: any): TYPE.UserState {
  switch (action.type) {
    case TYPE.SAVED_USER: {
      return {
        ...state,
        firstName: action.firstName,
        lastName: action.lastName,
        emailAddress: action.emailAddress,
      };
    }
    case TYPE.GOT_USER: {
      return {...state,
      emailAddress: action.payload,
      };
    }
    case TYPE.SET_JOIN: {
      return { ...state, isJoin: action.payload };
    }
    case TYPE.SET_DREAM: {
      return {...state, dream: action.payload};
    }
    case TYPE.SET_FIRST_NAME: {
      return {...state, firstName: action.payload};
    }
    case TYPE.SET_LAST_NAME: {
      return {...state, lastName: action.payload};
    }
    case TYPE.SET_EMAIL_ADDRESS: {
      return {...state, emailAddress: action.payload};
    }
    case TYPE.SET_PASSWORD:{
      return {...state, password: action.payload};
    }
    default:
      return state;
  }
}
