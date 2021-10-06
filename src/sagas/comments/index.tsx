import { put } from '@redux-saga/core/effects'
import axios from 'axios'
import { all, call, fork, takeLatest } from 'redux-saga/effects'
import { FetchCommentsType, WriteCommentType } from 'types'
import {
  DeleteCommentRequest,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  FetchCommentsRequest,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  UpdateCommentRequest,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
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

async function deleteCommentAPI(data: { postId: number; commentId: number }) {
  try {
    // http://api.wellseecoding/api/v1/posts/73/comments/23
    const response = await axios.delete(`/api/v1/posts/${data.postId}/comments/${data.commentId}`, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* deleteComment(action: DeleteCommentRequest) {
  try {
    const result: number = yield call(deleteCommentAPI, action.data)
    if (result === 200) {
      yield put({
        type: DELETE_COMMENT_SUCCESS,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: DELETE_COMMENT_FAILURE,
      data: err,
    })
  }
}

async function updateCommentAPI(data: { postId: number; commentId: number; text: string }) {
  try {
    // https://api.wellseecoding.com/api/v1/posts/370/comments/446
    const response = await axios.put(`/api/v1/posts/${data.postId}/comments/${data.commentId}`, data, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* updateComment(action: UpdateCommentRequest) {
  console.log('update Request!', action)
  try {
    const result: number = yield call(updateCommentAPI, action.data)
    if (result === 200) {
      yield put({
        type: UPDATE_COMMENT_SUCCESS,
        data: action.data,
      })
    }
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_COMMENT_FAILURE,
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

function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT_REQUEST, deleteComment)
}

function* watchUpdateComment() {
  yield takeLatest(UPDATE_COMMENT_REQUEST, updateComment)
}

export default function* commentSaga() {
  yield all([fork(watchFetchComments), fork(watchWriteComment), fork(watchDeleteComment), fork(watchUpdateComment)])
}
