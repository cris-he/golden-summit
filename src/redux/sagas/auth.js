import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import * as authApi from "../../api/auth";
import * as authAction from "../actions/auth";
import { SIGN_IN, SIGN_OUT, SIGN_UP } from "../constants/actionTypes";

function* signInWithCreds(creds) {
  try {
    console.log("auth-saga: signInWithCreds- API", creds.data);
    const user = yield call(authApi.signIn, creds.data);
    console.log("auth-saga: signInWithCreds - RES", user);
    // yield call(setAuthToken, user.id);
    /* dispatch action */
    console.log("auth-saga: signInWithCreds - DISPATCH", user);
    yield put(authAction.signInSuccess(user));
  } catch (error) {
    console.log("error: signInWithCreds", error);
  }
}

function* signOut() {
  try {
    console.log("auth-saga: signOut");
    const res = yield call(authApi.signOut);
    console.log("auth-saga: signOut - RES", res);
    // yield call(removeAuthToken);
    /* dispatch action */
    console.log("auth-saga: signOut - DISPATCH", res);
    yield put(authAction.signOutSuccess(res));
  } catch (error) {
    console.log("error: signOut", error);
  }
}

export function* signInSaga() {
  yield takeEvery(SIGN_IN, signInWithCreds);
}

export function* signOutSaga() {
  yield takeEvery(SIGN_OUT, signOut);
}

export default function* authSaga() {
  yield all([fork(signInSaga), fork(signOutSaga)]);
}
