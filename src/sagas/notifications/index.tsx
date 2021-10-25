import axios from 'axios'
import { FETCHING_NOTIS_FAILURE, FETCHING_NOTIS_REQUEST, FETCHING_NOTIS_SUCCESS } from 'reducers/notifications'
import { all, call, fork, takeLatest, put } from 'redux-saga/effects'
import { myConfig } from 'sagas'
import { notificationType } from 'types'

async function fetchNotisAPI() {
  try {
    const response = await axios.get('https://api.wellseecoding.com/api/v1/users/notifications', myConfig)
    return response.data.notifications
  } catch (err) {
    console.error(err)
  }
}

function* fetchNotis() {
  try {
    const result: notificationType[] = yield call(fetchNotisAPI)
    yield put({
      type: FETCHING_NOTIS_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_NOTIS_FAILURE,
      data: err,
    })
  }
}

function* watchFetchNotis() {
  yield takeLatest(FETCHING_NOTIS_REQUEST, fetchNotis)
}

export default function* NotificationSaga() {
  yield all([fork(watchFetchNotis)])
}
