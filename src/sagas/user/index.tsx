import { put } from '@redux-saga/core/effects'
import axios from 'axios'
import { all, call, fork, takeLatest } from 'redux-saga/effects'
import { API_URL } from 'apis'
import {
  RemoveItemRequest,
  SIGNUP_EXPERIENCE_REMOVE_REQUEST,
  SIGNUP_EXPERIENCE_REMOVE_SUCCECSS,
  SIGNUP_EXPERIENCE_REMOVE_FAIRIUR,
} from 'reducers/users'
import { Experience } from 'types'

type resultType = {
  result: Experience[]
}

async function userAPI(data: { first: number; last: number }) {
  try {
    const response = await axios.get(API_URL)
    const result = response.data.slice(data.first, data.last)
    return result
  } catch (err) {
    console.error(err)
  }
}

function* fetchUserExperience(action: RemoveItemRequest) {
  try {
    const result: resultType = yield call(userAPI, action.data)
    yield put({
      type: SIGNUP_EXPERIENCE_REMOVE_SUCCECSS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: SIGNUP_EXPERIENCE_REMOVE_FAIRIUR,
      data: err,
    })
  }
}

function* watchUserExperience() {
  yield takeLatest(SIGNUP_EXPERIENCE_REMOVE_REQUEST, fetchUserExperience)
}

export default function* todoSaga() {
  yield all([fork(watchUserExperience)])
}
