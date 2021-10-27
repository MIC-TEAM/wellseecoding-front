import { combineReducers } from 'redux'
import todos from './todos'
import posts from './posts'
import comments from './comments'
import common from './common'
import home from './home'
import notifications from './notifications'

const rootReducer = combineReducers({
  todos,
  posts,
  common,
  comments,
  home,
  notifications,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
