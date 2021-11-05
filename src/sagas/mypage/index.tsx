import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import { FETCHING_MYPAGE_FAILURE, FETCHING_MYPAGE_REQUEST, FETCHING_MYPAGE_SUCCESS } from 'reducers/mypage'
import { myPage } from 'types'

async function fetchMyPageAPI() {
  try {
    const response = await axios.get('api/v1/users/profile')
    return response.data
  } catch (err) {
    console.error(err)
  }
}

function* fetchMyPage() {
  try {
    const result: myPage = yield call(fetchMyPageAPI)
    yield put({
      type: FETCHING_MYPAGE_SUCCESS,
      data: result,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: FETCHING_MYPAGE_FAILURE,
      data: err,
    })
  }
}

function* watchFetchMyPage() {
  yield takeLatest(FETCHING_MYPAGE_REQUEST, fetchMyPage)
}

export default function* MyPageSaga() {
  yield all([fork(watchFetchMyPage)])
}
