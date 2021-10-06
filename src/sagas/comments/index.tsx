import { put } from '@redux-saga/core/effects'
import axios from 'axios'
import { all, call, fork, takeLatest } from 'redux-saga/effects'
import { FetchCommentsType } from 'types'
import {
  FetchCommentsRequest,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
} from 'reducers/comments'
import { myConfig } from 'sagas'

async function fetchCommentsAPI(id: number) {
  try {
    console.log('fetch Comment Start!', id)
    const response: any = await axios.get(`/api/v1/posts/${id}/comments`, myConfig)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

function* fetchComments(action: FetchCommentsRequest) {
  try {
    const result: FetchCommentsType = yield call(fetchCommentsAPI, action.data)
    yield put({
      type: FETCH_COMMENTS_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCH_COMMENTS_FAILURE,
      data: err,
    })
  }
}

function* watchFetchComments() {
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments)
}

export default function* commentSaga() {
  yield all([fork(watchFetchComments)])
}
