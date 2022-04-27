import {
  RESTORE_SETTINGS,
  SET_LOCALE_SUCCESS,
  SIDE_MENU_COLLAPSE,
} from "../constants/actionTypes";

import defaultSettings from "../constants/default-settings";
import { getLocale } from "../utils/local-storage";
const INIT_STATE = {
  ...defaultSettings,
  locale: getLocale(),
};

export default (state = INIT_STATE, action) => {
  console.log("setting-reducer: " + action.type, action);
  switch (action.type) {
    case SET_LOCALE_SUCCESS: {
      return { ...state, locale: action.data };
    }
    case SIDE_MENU_COLLAPSE: {
      return { ...state, collapsedSideMenu: !state.collapsedSideMenu };
    }
    case RESTORE_SETTINGS:
      return defaultSettings;
    default:
      return state;
  }
};
