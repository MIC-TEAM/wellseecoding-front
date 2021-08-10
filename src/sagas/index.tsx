import { all, fork } from 'redux-saga/effects'

import todoSaga from './todos'

export default function* rootSaga() {
  yield all([fork(todoSaga)])
}
