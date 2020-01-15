

import { takeLatest, all } from 'redux-saga/effects';
import { helloSaga } from './helloSaga';

// function* vote(dispatch) {
//     dispatch({ type: "CAST_VOTE" })
// }

export default function* rootSaga() {
  yield all([
      
    takeLatest("CAST_VOTE", helloSaga)
  ])
}