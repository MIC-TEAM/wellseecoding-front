import produce from 'immer'
import { PostType } from 'types'

// initialState 타입 정의
export interface PostsIntialState {
  posts: PostType[]

  fetchPostsLoading: boolean
  fetchPostsSuccess: boolean
  fetchPostsFailure: null | Error
}

// initialState 정의
export const initialState: PostsIntialState = {
  posts: [],

  fetchPostsLoading: false,
  fetchPostsSuccess: false,
  fetchPostsFailure: null,
}

// 액션 정의
export const FETCHING_POSTS_REQUEST = 'FETCHING_POSTS_REQUEST' as const
export const FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS' as const
export const FETCHING_POSTS_FAILURE = 'FETCHING_POSTS_FAILURE' as const

// 액션에 대한 타입 정의;
export interface FetchingPostsRequest {
  type: typeof FETCHING_POSTS_REQUEST
}

export interface FetchingPostsSuccess {
  type: typeof FETCHING_POSTS_SUCCESS
  posts: PostType
  data: []
}

export interface FetchingPostsFailure {
  type: typeof FETCHING_POSTS_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const fetchingPostsRequest = (): FetchingPostsRequest => ({
  type: FETCHING_POSTS_REQUEST,
})

export const fetchingPostsSuccess = (posts: PostType, data: []): FetchingPostsSuccess => ({
  type: FETCHING_POSTS_SUCCESS,
  posts,
  data,
})

export const fetchingPostsFailure = (error: Error): FetchingPostsFailure => ({
  type: FETCHING_POSTS_FAILURE,
  error,
})

export type FetchingPosts =
  | ReturnType<typeof fetchingPostsRequest>
  | ReturnType<typeof fetchingPostsSuccess>
  | ReturnType<typeof fetchingPostsFailure>

const posts = (state: PostsIntialState = initialState, action: FetchingPosts) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_POSTS_REQUEST: {
        draft.fetchPostsLoading = true
        draft.fetchPostsLoading = false
        break
      }
      case FETCHING_POSTS_SUCCESS: {
        draft.fetchPostsLoading = false
        draft.fetchPostsSuccess = true
        draft.posts = draft.posts.concat(action.data)
        break
      }
      case FETCHING_POSTS_FAILURE: {
        draft.fetchPostsSuccess = false
        draft.fetchPostsFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default posts
