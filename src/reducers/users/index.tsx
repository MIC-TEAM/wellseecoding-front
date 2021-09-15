import produce from 'immer'
import { PostType } from 'types'

// initialState 타입 정의
export interface SignUpIntialState {
  user: null

  isLoggingIn: boolean
  isLoggingSuccess: boolean | Error
  degree: string
  major: string
  graduated: string
  aboutMe: string
  name: string
  link: string
  description: string
  role: string
  technology: string
  years: string
}

// initialState 정의
export const initialState: SignUpIntialState = {
  user: null,
  isLoggingIn: false,
  isLoggingSuccess: false,
  degree: '',
  major: '',
  graduated: '',
  aboutMe: '',
  name: '',
  link: '',
  description: '',
  role: '',
  technology: '',
  years: '',
}

// 액션 정의
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' as const
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE' as const

// 액션에 대한 타입 정의;
export interface FetchingPostsRequest {
  type: typeof SIGNUP_REQUEST
}

export interface FetchingPostsSuccess {
  type: typeof SIGNUP_SUCCESS
  posts: PostType
  data: []
}

export interface FetchingPostsFailure {
  type: typeof SIGNUP_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const fetchingPostsRequest = (): FetchingPostsRequest => ({
  type: SIGNUP_REQUEST,
})

export const fetchingPostsSuccess = (posts: PostType, data: []): FetchingPostsSuccess => ({
  type: SIGNUP_SUCCESS,
  posts,
  data,
})

export const fetchingPostsFailure = (error: Error): FetchingPostsFailure => ({
  type: SIGNUP_FAILURE,
  error,
})

export type FetchingPosts =
  | ReturnType<typeof fetchingPostsRequest>
  | ReturnType<typeof fetchingPostsSuccess>
  | ReturnType<typeof fetchingPostsFailure>
const posts = (state: SignUpIntialState = initialState, action: FetchingPosts) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP_REQUEST: {
        draft.isLoggingIn = true
        draft.isLoggingSuccess = false
        break
      }
      case SIGNUP_SUCCESS: {
        draft.isLoggingIn = false
        draft.isLoggingSuccess = true
        break
      }
      case SIGNUP_FAILURE: {
        draft.isLoggingIn = false
        draft.isLoggingSuccess = action.error
        break
      }
      default:
        return state
    }
  })

export default posts
