import axios from 'axios'
import { all, call, fork, takeLatest, put } from 'redux-saga/effects'
import {
  FETCHING_POSTS_FAILURE,
  FETCHING_POSTS_REQUEST,
  FETCHING_POSTS_SUCCESS,
  WritePostRequest,
  WRITE_POST_FAILURE,
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
} from 'reducers/posts'
import { myConfig } from 'sagas'
import { TodoType, WritePostType } from 'types'

async function fetchPostsAPI() {
  try {
    const { data } = await axios.get('/api/v1/posts', myConfig)
    return data
  } catch (err) {
    console.error(err)
  }
}

function* fetchPosts() {
  try {
    const result: TodoType = yield call(fetchPostsAPI)
    yield put({
      type: FETCHING_POSTS_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_POSTS_FAILURE,
      data: err,
    })
  }
}

async function writePostAPI(data: WritePostType) {
  try {
    const response = await axios.post('/api/v1/posts', data, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* writePost(action: WritePostRequest) {
  console.log('action:', action.data)
  try {
    const result: number = yield call(writePostAPI, action.data)
    console.log('success', result)
    yield put({
      type: WRITE_POST_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: WRITE_POST_FAILURE,
      data: err,
    })
  }
}

function* watchFetchPosts() {
  yield takeLatest(FETCHING_POSTS_REQUEST, fetchPosts)
}

function* watchWritePost() {
  yield takeLatest(WRITE_POST_REQUEST, writePost)
}

export default function* postSaga() {
  yield all([fork(watchFetchPosts), fork(watchWritePost)])
}
