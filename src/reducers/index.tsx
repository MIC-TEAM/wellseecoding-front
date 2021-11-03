import { combineReducers } from 'redux'
import todos from './todos'
import posts from './posts'
import comments from './comments'
import common from './common'
import home from './home'
import notifications from './notifications'
import mypage from './mypage'

const rootReducer = combineReducers({
  todos,
  posts,
  common,
  comments,
  home,
  notifications,
  mypage,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
