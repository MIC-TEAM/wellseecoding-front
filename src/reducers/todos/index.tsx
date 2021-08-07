import produce from 'immer'
import { todoType } from 'types'

// initialState 타입 정의
export interface todosIntialState {
  todos: todoType[]

  fetchTodosLoading: boolean
  fetchTodosSuccess: boolean
  fetchTodosFailure: null | Error
}

// initialState 정의
export const initialState: todosIntialState = {
  todos: [],

  fetchTodosLoading: false,
  fetchTodosSuccess: false,
  fetchTodosFailure: null,
}

// 액션 정의
export const FETCHING_TODOS_REQUEST = 'FETCHING_TODOS_REQUEST' as const
export const FETCHING_TODOS_SUCCESS = 'FETCHING_TODOS_SUCCESS' as const
export const FETCHING_TODOS_FAILURE = 'FETCHING_TODOS_FAILURE' as const

// 액션에 대한 타입 정의;
export interface FetchingTodosRequest {
  type: typeof FETCHING_TODOS_REQUEST
  data: {
    first: number
    last: number
  }
}

export interface FetchingTodosSuccess {
  type: typeof FETCHING_TODOS_SUCCESS
  todos: todoType
  data: []
}

export interface FetchingTodosFailure {
  type: typeof FETCHING_TODOS_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const fetchingToddsRequest = (data: { first: number; last: number }): FetchingTodosRequest => ({
  type: FETCHING_TODOS_REQUEST,
  data,
})

export const fetchingToddsSuccess = (todos: todoType, data: []): FetchingTodosSuccess => ({
  type: FETCHING_TODOS_SUCCESS,
  todos,
  data,
})

export const fetchingToddsFailure = (error: Error): FetchingTodosFailure => ({
  type: FETCHING_TODOS_FAILURE,
  error,
})

export type FetchingTodos =
  | ReturnType<typeof fetchingToddsRequest>
  | ReturnType<typeof fetchingToddsSuccess>
  | ReturnType<typeof fetchingToddsFailure>

const todos = (state: todosIntialState = initialState, action: FetchingTodos) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_TODOS_REQUEST: {
        draft.fetchTodosLoading = true
        draft.fetchTodosLoading = false
        break
      }
      case FETCHING_TODOS_SUCCESS: {
        draft.fetchTodosLoading = false
        draft.fetchTodosSuccess = true
        draft.todos = draft.todos.concat(action.data)
        break
      }
      case FETCHING_TODOS_FAILURE: {
        draft.fetchTodosSuccess = false
        draft.fetchTodosFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default todos
