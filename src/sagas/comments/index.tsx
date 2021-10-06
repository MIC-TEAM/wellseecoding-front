import { put } from '@redux-saga/core/effects'
import axios from 'axios'
import { all, call, fork, takeLatest } from 'redux-saga/effects'
import { FetchCommentsType, WriteCommentType } from 'types'
import {
  FetchCommentsRequest,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  WriteCommentRequest,
  WRITE_COMMENT_FAILURE,
  WRITE_COMMENT_REQUEST,
  WRITE_COMMENT_SUCCESS,
} from 'reducers/comments'
import { myConfig } from 'sagas'

async function fetchCommentsAPI(id: number) {
  try {
    console.log('fetch Comment Start!', id)
    const response = await axios.get(`/api/v1/posts/${id}/comments`, myConfig)
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

async function writeCommentAPI(data: WriteCommentType) {
  try {
    const response = await axios.post(`/api/v1/posts/${data.id}/comments`, data, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* writeComment(action: WriteCommentRequest) {
  try {
    const result: number = yield call(writeCommentAPI, action.data)
    if (result === 200) {
      yield put({
        type: WRITE_COMMENT_SUCCESS,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: WRITE_COMMENT_FAILURE,
      data: err,
    })
  }
}

function* watchFetchComments() {
  yield takeLatest(FETCH_COMMENTS_REQUEST, fetchComments)
}

function* watchWriteComment() {
  yield takeLatest(WRITE_COMMENT_REQUEST, writeComment)
}

export default function* commentSaga() {
  yield all([fork(watchFetchComments), fork(watchWriteComment)])
}
