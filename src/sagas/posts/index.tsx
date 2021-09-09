import axios from 'axios'
import { all, call, fork, takeLatest, put } from 'redux-saga/effects'
import { FETCHING_POSTS_FAILURE, FETCHING_POSTS_REQUEST, FETCHING_POSTS_SUCCESS } from 'reducers/posts'
import { myConfig } from 'sagas'
import { TodoType } from 'types'

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

function* watchFetchPosts() {
  yield takeLatest(FETCHING_POSTS_REQUEST, fetchPosts)
}

export default function* postSaga() {
  yield all([fork(watchFetchPosts)])
}
