import { combineReducers } from "redux";
import AuthReducer from "./auth";

const reducers = combineReducers({
  user: AuthReducer,
});

export default reducers;
