import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import { FETCHING_HOME_POSTS_FAILURE, FETCHING_HOME_POSTS_REQUEST, FETCHING_HOME_POSTS_SUCCESS } from 'reducers/home'
import { myConfig } from 'sagas'
import { homeData } from 'types'

async function fetchHomePostsAPI() {
  try {
    const response = await axios.get('api/v1/home/posts', myConfig)
    return response.data
  } catch (err) {
    console.error(err)
  }
}

function* fetchHomePosts() {
  try {
    const result: homeData = yield call(fetchHomePostsAPI)
    yield put({
      type: FETCHING_HOME_POSTS_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_HOME_POSTS_FAILURE,
      data: err,
    })
  }
}

function* watchFetchHomePosts() {
  yield takeLatest(FETCHING_HOME_POSTS_REQUEST, fetchHomePosts)
}

export default function* homeSaga() {
  yield all([fork(watchFetchHomePosts)])
}
