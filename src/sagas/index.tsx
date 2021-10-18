import axios from 'axios'
import { all, fork } from 'redux-saga/effects'
import postSaga from './posts'
import todoSaga from './todos'
import commentSaga from './comments'
import homeSaga from './home'

const myToken = process.env.NEXT_PUBLIC_TOKEN

// config에 들어갈 프로퍼티를 default 값으로도 설정할 수 있습니다
axios.defaults.baseURL = 'https://api.wellseecoding.com/'
axios.defaults.withCredentials = true

export const myConfig = {
  headers: {
    Authorization: `Bearer ${myToken}`,
  },
}

export default function* rootSaga() {
  yield all([fork(todoSaga), fork(postSaga), fork(commentSaga), fork(homeSaga)])
}
