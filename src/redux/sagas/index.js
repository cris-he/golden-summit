import { all } from "redux-saga/effects";
import authSaga from "./auth";
import settingSaga from "./setting";

export default function* rootSaga(getState) {
  yield all([authSaga(), settingSaga()]);
}
