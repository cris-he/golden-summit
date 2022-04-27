import { combineReducers } from "redux";
import AuthReducer from "./auth-reducer";
import SettingReducer from "./setting-reducer";

const reducers = combineReducers({
  user: AuthReducer,
  settings: SettingReducer,
});

export default reducers;
