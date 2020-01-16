import { all } from "redux-saga/effects";

import { vote } from "./vote.saga";

export default function* rootSaga() {
  yield all([vote()]);
}
