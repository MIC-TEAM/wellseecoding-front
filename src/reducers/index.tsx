import { combineReducers } from 'redux'
import todos from './todos'
import posts from './posts'
import common from './common'

const rootReducer = combineReducers({
  todos,
  posts,
  common,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
