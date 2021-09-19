import axios from 'axios'
import { all, call, fork, takeLatest, put } from 'redux-saga/effects'
import {
  DeletePostRequest,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  FetchingPostRequest,
  FETCHING_POSTS_FAILURE,
  FETCHING_POSTS_REQUEST,
  FETCHING_POSTS_SUCCESS,
  FETCHING_POST_FAILURE,
  FETCHING_POST_REQUEST,
  FETCHING_POST_SUCCESS,
  WritePostRequest,
  WRITE_POST_FAILURE,
  WRITE_POST_REQUEST,
  WRITE_POST_SUCCESS,
} from 'reducers/posts'
import { myConfig } from 'sagas'
import { PostType, WritePostType } from 'types'

async function fetchPostsAPI() {
  try {
    const result = await axios.get('/api/v1/posts', myConfig)
    // console.log('result:', result)
    return result.data
  } catch (err) {
    console.error(err)
  }
}

function* fetchPosts() {
  try {
    const result: PostType = yield call(fetchPostsAPI)
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

async function fetchPostAPI(data: number) {
  try {
    const result = await axios.get(`/api/v1/posts/${data}`, myConfig)
    // console.log('result:', result)
    return result.data
  } catch (err) {
    console.error(err)
  }
}

function* fetchPost(action: FetchingPostRequest) {
  try {
    const result: PostType = yield call(fetchPostAPI, action.data)
    yield put({
      type: FETCHING_POST_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_POST_FAILURE,
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

async function deletePostAPI(data: number) {
  try {
    const response = await axios.delete(`/api/v1/posts/${data}`, myConfig)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* deletePost(action: DeletePostRequest) {
  try {
    const result: number = yield call(deletePostAPI, action.data)
    console.log('success', result)
    yield put({
      type: DELETE_POST_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: DELETE_POST_FAILURE,
      data: err,
    })
  }
}

function* watchFetchPosts() {
  yield takeLatest(FETCHING_POSTS_REQUEST, fetchPosts)
}

function* watchFetchPost() {
  yield takeLatest(FETCHING_POST_REQUEST, fetchPost)
}

function* watchWritePost() {
  yield takeLatest(WRITE_POST_REQUEST, writePost)
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost)
}

export default function* postSaga() {
  yield all([fork(watchFetchPosts), fork(watchWritePost), fork(watchFetchPost), fork(watchDeletePost)])
}
