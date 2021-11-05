import axios from 'axios'
import { all, fork } from 'redux-saga/effects'
import postSaga from './posts'
import commentSaga from './comments'
import homeSaga from './home'
import NotificationSaga from './notifications'
const myToken = process.env.NEXT_PUBLIC_TOKEN

// config에 들어갈 프로퍼티를 default 값으로도 설정할 수 있습니다
axios.defaults.baseURL = 'https://api.wellseecoding.com/'

/* 토큰 확인용 임시 서버 */
// axios.defaults.baseURL = 'https://api-local.wellseecoding.com/'

/* 로컬 */
// axios.defaults.baseURL = 'http://localhost:8080/'

axios.defaults.withCredentials = true
axios.defaults.headers = {
  ...axios.defaults.headers,
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
}

export const myConfig = {
  headers: {
    Authorization: `Bearer ${myToken}`,
  },
}
export default function* rootSaga() {
  yield all([fork(postSaga), fork(commentSaga), fork(homeSaga), fork(NotificationSaga)])
}
