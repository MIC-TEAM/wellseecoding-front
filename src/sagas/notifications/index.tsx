import axios from 'axios'
import {
  DELETE_ALL_NOTIS_FAILURE,
  DELETE_ALL_NOTIS_REQUEST,
  DELETE_ALL_NOTIS_SUCCESS,
  FETCHING_NOTIS_FAILURE,
  FETCHING_NOTIS_REQUEST,
  FETCHING_NOTIS_SUCCESS,
  READ_ALL_NOTIS_FAILURE,
  READ_ALL_NOTIS_REQUEST,
  READ_ALL_NOTIS_SUCCESS,
  UpdateNotiRequest,
  UPDATE_NOTI_FAILURE,
  UPDATE_NOTI_REQUEST,
  UPDATE_NOTI_SUCCESS,
} from 'reducers/notifications'
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
    if (result.length) {
      yield put({
        type: FETCHING_NOTIS_SUCCESS,
        data: result,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_NOTIS_FAILURE,
      data: err,
    })
  }
}

async function updateNotiAPI(data: number) {
  try {
    const response = await axios.put(`/api/v1/users/notifications/${data}/read`, {}, myConfig)
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

function* updateNoti(action: UpdateNotiRequest) {
  try {
    const result: number = yield call(updateNotiAPI, action.data)

    if (result === 200) {
      yield put({
        type: UPDATE_NOTI_SUCCESS,
        data: action.data,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_NOTI_FAILURE,
      data: err,
    })
  }
}

async function readAllNotisAPI() {
  try {
    const response = await axios.put('/api/v1/users/notifications/read', {}, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* readAllNotis() {
  try {
    const result: number = yield call(readAllNotisAPI)
    if (result === 200) {
      yield put({
        type: READ_ALL_NOTIS_SUCCESS,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: READ_ALL_NOTIS_FAILURE,
      data: err,
    })
  }
}

async function deleteAllNotisAPI() {
  try {
    const response = await axios.delete('/api/v1/users/notifications', myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* deleteAllNotis() {
  try {
    const result: number = yield call(deleteAllNotisAPI)
    if (result === 200) {
      yield put({
        type: DELETE_ALL_NOTIS_SUCCESS,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: DELETE_ALL_NOTIS_FAILURE,
      data: err,
    })
  }
}

function* watchFetchNotis() {
  yield takeLatest(FETCHING_NOTIS_REQUEST, fetchNotis)
}

function* watchUpdateNoti() {
  yield takeLatest(UPDATE_NOTI_REQUEST, updateNoti)
}

function* watchReadAllNotis() {
  yield takeLatest(READ_ALL_NOTIS_REQUEST, readAllNotis)
}

function* watchDeleteAllNotis() {
  yield takeLatest(DELETE_ALL_NOTIS_REQUEST, deleteAllNotis)
}

export default function* NotificationSaga() {
  yield all([fork(watchFetchNotis), fork(watchUpdateNoti), fork(watchReadAllNotis), fork(watchDeleteAllNotis)])
}
