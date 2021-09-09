import { combineReducers } from 'redux'
import todos from './todos'
import posts from './posts'

const rootReducer = combineReducers({
  todos,
  posts,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
