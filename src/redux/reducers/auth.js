import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_UP_SUCCESS,
} from "../constants/actionTypes";

const INIT_STATE = {
  token: localStorage.getItem("fake-token"),
};

export default (state = INIT_STATE, action) => {
  console.log("auth-reducer: " + action.type, action);
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        ...action.data,
      };
    }
    case SIGN_OUT_SUCCESS: {
      return {
        token: action.data,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        token: action.data,
      };
    }
    default:
      return state;
  }
};
