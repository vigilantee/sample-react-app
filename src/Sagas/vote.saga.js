import { put, takeLatest } from "redux-saga/effects";

function* voteAsync(props) {
  let { index, vote } = props;
  yield put({ type: "VOTE", index, vote });
}

function* vote() {
  yield takeLatest("CAST_VOTE", voteAsync);
}

export { vote };
