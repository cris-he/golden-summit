import { all } from "redux-saga/effects";
import authSaga from "./auth";

export default function* rootSaga(getState) {
  yield all([authSaga()]);
}
