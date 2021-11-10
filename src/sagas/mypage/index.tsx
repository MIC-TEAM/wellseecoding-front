import { all, call, fork, put, takeLatest } from '@redux-saga/core/effects'
import axios from 'axios'
import {
  FETCHING_MYPAGE_FAILURE,
  FETCHING_MYPAGE_REQUEST,
  FETCHING_MYPAGE_SUCCESS,
  UpdateSelfIntroRequest,
  UPDATE_SELF_INTRO_REQUEST,
  UPDATE_SELF_INTRO_SUCCESS,
  UPDATE_SELF_INTRO_FAILURE,
  UPDATE_SCHOOL_REQUEST,
  UPDATE_SCHOOL_SUCCESS,
  UPDATE_SCHOOL_FAILURE,
  UPDATE_YEARS_REQUEST,
  UPDATE_YEARS_SUCCESS,
  UPDATE_YEARS_FAILURE,
  UPDATE_PORTFOLIO_REQUEST,
  UPDATE_PORTFOLIO_SUCCESS,
  UPDATE_PORTFOLIO_FAILURE,
} from 'reducers/mypage'
import { myPage, myPageSelfIntro } from 'types'

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

// 자기소개 업데이트
async function updateSelfIntroAPI(data: myPageSelfIntro) {
  try {
    const response = await axios.put(`/api/v1/users/profile/preface`, data)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* updateSelfIntro(action: UpdateSelfIntroRequest) {
  try {
    yield call(updateSelfIntroAPI, action.data)
    yield put({
      type: UPDATE_SELF_INTRO_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_SELF_INTRO_FAILURE,
      data: err,
    })
  }
}

// 학교정보 업데이트
async function updateSchoolAPI(data: myPageSelfIntro) {
  try {
    const response = await axios.put(`/api/v1/users/profile/education`, data)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* updateSchool(action: UpdateSelfIntroRequest) {
  try {
    yield call(updateSchoolAPI, action.data)
    yield put({
      type: UPDATE_SCHOOL_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_SCHOOL_FAILURE,
      data: err,
    })
  }
}

//경력정보 업데이트
async function updateYearsAPI(data: myPageSelfIntro) {
  try {
    const response = await axios.put(`/api/v1/users/profile/works`, data)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* updateYears(action: UpdateSelfIntroRequest) {
  try {
    yield call(updateYearsAPI, action.data)
    yield put({
      type: UPDATE_YEARS_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_YEARS_FAILURE,
      data: err,
    })
  }
}

//포트폴리오 업데이트
async function updatePortfolioAPI(data: myPageSelfIntro) {
  try {
    const response = await axios.put(`/api/v1/users/profile/links`, data)
    return response.status
  } catch (err) {
    console.error(err)
  }
}

function* updatePortfolio(action: UpdateSelfIntroRequest) {
  try {
    yield call(updatePortfolioAPI, action.data)
    yield put({
      type: UPDATE_PORTFOLIO_SUCCESS,
    })
  } catch (err) {
    console.error(err)
    yield put({
      type: UPDATE_PORTFOLIO_FAILURE,
      data: err,
    })
  }
}

function* watchFetchMyPage() {
  yield takeLatest(FETCHING_MYPAGE_REQUEST, fetchMyPage)
}
function* watchUpdateSelfIntro() {
  yield takeLatest(UPDATE_SELF_INTRO_REQUEST, updateSelfIntro)
}
function* watchUpdateSchool() {
  yield takeLatest(UPDATE_SCHOOL_REQUEST, updateSchool)
}
function* watchUpdateYears() {
  yield takeLatest(UPDATE_YEARS_REQUEST, updateYears)
}
function* watchUpdatePortfoilo() {
  yield takeLatest(UPDATE_PORTFOLIO_REQUEST, updatePortfolio)
}
export default function* MyPageSaga() {
  yield all([
    fork(watchFetchMyPage),
    fork(watchUpdateSelfIntro),
    fork(watchUpdateSchool),
    fork(watchUpdateYears),
    fork(watchUpdatePortfoilo),
  ])
}
