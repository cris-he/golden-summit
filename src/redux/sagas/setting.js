import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import * as settingAction from '../actions/setting';
import { SET_LOCALE } from '../constants/actionTypes';
import { setLocale } from '../utils/local-storage';

function* setLocaleInLocalStorage(langauge) {
  try {
    console.log('setting-saga: setLocaleInLocalStorage', langauge);
    yield call(setLocale, langauge.data);
    /* dispatch action */
    yield put(settingAction.setLocaleSuccess(langauge.data));
  } catch (error) {
    console.log('error: setLocaleLocalStorage', error);
  }
}

export function* setLocaleSaga() {
  yield takeEvery(SET_LOCALE, setLocaleInLocalStorage);
}

export default function* authSaga() {
  yield all([
    fork(setLocaleSaga)
  ]);
}