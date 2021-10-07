import produce from 'immer'
import { PostData, PostType, WritePostType } from 'types'

export interface IPosttype {
  posts: PostData
}

// initialState 타입 정의
export interface PostsIntialState {
  posts: PostData[]
  post: PostType[]
  searchPosts: PostType[]

  fetchPostsLoading: boolean
  fetchPostsSuccess: boolean
  fetchPostsFailure: null | Error

  fetchPostLoading: boolean
  fetchPostSuccess: boolean
  fetchPostFailure: null | Error

  writePostLoading: boolean
  writePostSuccess: boolean
  writePostFailure: null | Error

  updatePostLoading: boolean
  updatePostSuccess: boolean
  updatePostFailure: null | Error

  deletePostLoading: boolean
  deletePostSuccess: boolean
  deletePostFailure: null | Error

  searchPostsLoading: boolean
  searchPostsSuccess: boolean
  searchPostsFailure: null | Error
}

// initialState 정의
export const initialState: PostsIntialState = {
  posts: [],
  post: [],
  searchPosts: [],

  fetchPostsLoading: false,
  fetchPostsSuccess: false,
  fetchPostsFailure: null,

  fetchPostLoading: false,
  fetchPostSuccess: false,
  fetchPostFailure: null,

  writePostLoading: false,
  writePostSuccess: false,
  writePostFailure: null,

  updatePostLoading: false,
  updatePostSuccess: false,
  updatePostFailure: null,

  deletePostLoading: false,
  deletePostSuccess: false,
  deletePostFailure: null,

  searchPostsLoading: false,
  searchPostsSuccess: false,
  searchPostsFailure: null,
}

// 액션 정의
export const FETCHING_POSTS_REQUEST = 'FETCHING_POSTS_REQUEST' as const
export const FETCHING_POSTS_SUCCESS = 'FETCHING_POSTS_SUCCESS' as const
export const FETCHING_POSTS_FAILURE = 'FETCHING_POSTS_FAILURE' as const

export const FETCHING_POST_REQUEST = 'FETCHING_POST_REQUEST' as const
export const FETCHING_POST_SUCCESS = 'FETCHING_POST_SUCCESS' as const
export const FETCHING_POST_FAILURE = 'FETCHING_POST_FAILURE' as const

export const WRITE_POST_REQUEST = 'WRITE_POST_REQUEST' as const
export const WRITE_POST_SUCCESS = 'WRITE_POST_SUCCESS' as const
export const WRITE_POST_FAILURE = 'WRITE_POST_FAILURE' as const

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST' as const
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS' as const
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE' as const

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST' as const
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS' as const
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE' as const

export const RESET_POST_LIST = 'RESET_POST_LIST' as const

export const RESET_SEARCH_LIST = 'RESET_SEARCH_LIST' as const

export const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST' as const
export const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS' as const
export const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE' as const

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

// 단일 게시글 불러오기
export interface FetchingPostRequest {
  type: typeof FETCHING_POST_REQUEST
  data: number
}

export interface FetchingPostSuccess {
  type: typeof FETCHING_POST_SUCCESS
  posts: PostType
  data: []
}

export interface FetchingPostFailure {
  type: typeof FETCHING_POST_FAILURE
  error: Error
}

export interface WritePostRequest {
  type: typeof WRITE_POST_REQUEST
  data: WritePostType
}

export interface WritePostSuccess {
  type: typeof WRITE_POST_SUCCESS
}

export interface WritePostFailure {
  type: typeof WRITE_POST_FAILURE
  error: Error
}

export interface UpdatePostRequest {
  type: typeof UPDATE_POST_REQUEST
  data: WritePostType // write와 마찬가지로 기존 데이터를 덮어씌움
}

export interface UpdatePostuccess {
  type: typeof UPDATE_POST_SUCCESS
}

export interface UpdatePostFailure {
  type: typeof UPDATE_POST_FAILURE
  error: Error
}

export interface DeletePostRequest {
  type: typeof DELETE_POST_REQUEST
  data: number
}

export interface DeletePostuccess {
  type: typeof DELETE_POST_SUCCESS
}

export interface DeletePostFailure {
  type: typeof DELETE_POST_FAILURE
  error: Error
}

export interface ResetPostList {
  type: typeof RESET_POST_LIST
}

export interface ResetSearchList {
  type: typeof RESET_SEARCH_LIST
}

export interface SearchPostsRequest {
  type: typeof SEARCH_POSTS_REQUEST
  data: string
}

export interface SearchPostsSuccess {
  type: typeof SEARCH_POSTS_SUCCESS
  searchPosts: PostType
  data: []
}

export interface SearchPostsFailure {
  type: typeof SEARCH_POSTS_FAILURE
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

export const fetchingPostRequest = (data: number): FetchingPostRequest => ({
  type: FETCHING_POST_REQUEST,
  data,
})

export const fetchingPostSuccess = (posts: PostType, data: []): FetchingPostSuccess => ({
  type: FETCHING_POST_SUCCESS,
  posts,
  data,
})

export const fetchingPostFailure = (error: Error): FetchingPostFailure => ({
  type: FETCHING_POST_FAILURE,
  error,
})

export const writePostRequest = (data: WritePostType): WritePostRequest => ({
  type: WRITE_POST_REQUEST,
  data,
})

export const writePostSuccess = (): WritePostSuccess => ({
  type: WRITE_POST_SUCCESS,
})

export const writePostFailure = (error: Error): WritePostFailure => ({
  type: WRITE_POST_FAILURE,
  error,
})

export const updatePostRequest = (data: WritePostType): UpdatePostRequest => ({
  type: UPDATE_POST_REQUEST,
  data,
})

export const updatePostuccess = (): UpdatePostuccess => ({
  type: UPDATE_POST_SUCCESS,
})

export const updatePostFailure = (error: Error): UpdatePostFailure => ({
  type: UPDATE_POST_FAILURE,
  error,
})

export const deletePostRequest = (data: number): DeletePostRequest => ({
  type: DELETE_POST_REQUEST,
  data,
})

export const deletePostuccess = (): DeletePostuccess => ({
  type: DELETE_POST_SUCCESS,
})

export const deletePostFailure = (error: Error): DeletePostFailure => ({
  type: DELETE_POST_FAILURE,
  error,
})

export const resetPostList = (): ResetPostList => ({
  type: RESET_POST_LIST,
})

export const resetSearchList = (): ResetSearchList => ({
  type: RESET_SEARCH_LIST,
})

export const searchPostsRequest = (data: string): SearchPostsRequest => ({
  type: SEARCH_POSTS_REQUEST,
  data,
})

export const searchPostsSuccess = (searchPosts: PostType, data: []): SearchPostsSuccess => ({
  type: SEARCH_POSTS_SUCCESS,
  searchPosts,
  data,
})

export const searchPostsFailure = (error: Error): SearchPostsFailure => ({
  type: SEARCH_POSTS_FAILURE,
  error,
})

export type FetchingPosts =
  | ReturnType<typeof fetchingPostsRequest>
  | ReturnType<typeof fetchingPostsSuccess>
  | ReturnType<typeof fetchingPostsFailure>
  | ReturnType<typeof fetchingPostRequest>
  | ReturnType<typeof fetchingPostSuccess>
  | ReturnType<typeof fetchingPostFailure>
  | ReturnType<typeof writePostRequest>
  | ReturnType<typeof writePostSuccess>
  | ReturnType<typeof writePostFailure>
  | ReturnType<typeof updatePostRequest>
  | ReturnType<typeof updatePostuccess>
  | ReturnType<typeof updatePostFailure>
  | ReturnType<typeof deletePostRequest>
  | ReturnType<typeof deletePostuccess>
  | ReturnType<typeof deletePostFailure>
  | ReturnType<typeof resetPostList>
  | ReturnType<typeof resetSearchList>
  | ReturnType<typeof searchPostsRequest>
  | ReturnType<typeof searchPostsSuccess>
  | ReturnType<typeof searchPostsFailure>

const posts = (state: PostsIntialState = initialState, action: FetchingPosts) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_POSTS_REQUEST: {
        draft.fetchPostsLoading = true
        draft.fetchPostsSuccess = false
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
      case FETCHING_POST_REQUEST: {
        draft.fetchPostLoading = true
        draft.fetchPostSuccess = false
        break
      }
      case FETCHING_POST_SUCCESS: {
        draft.fetchPostLoading = false
        draft.fetchPostSuccess = true
        draft.post = draft.post.concat(action.data)
        break
      }
      case FETCHING_POST_FAILURE: {
        draft.fetchPostSuccess = false
        draft.fetchPostFailure = action.error
        break
      }
      case RESET_POST_LIST: {
        draft.post = []
        break
      }
      case RESET_SEARCH_LIST: {
        draft.searchPosts = []
        break
      }
      case WRITE_POST_REQUEST: {
        draft.writePostLoading = true
        draft.writePostSuccess = false
        break
      }
      case WRITE_POST_SUCCESS: {
        draft.writePostLoading = false
        draft.writePostSuccess = true
        break
      }
      case WRITE_POST_FAILURE: {
        draft.writePostSuccess = false
        draft.writePostFailure = action.error
        break
      }
      case UPDATE_POST_REQUEST: {
        draft.updatePostLoading = true
        draft.updatePostSuccess = false
        break
      }
      case UPDATE_POST_SUCCESS: {
        draft.updatePostLoading = false
        draft.updatePostSuccess = true
        break
      }
      case UPDATE_POST_FAILURE: {
        draft.updatePostSuccess = false
        draft.updatePostFailure = action.error
        break
      }
      case DELETE_POST_REQUEST: {
        draft.deletePostLoading = true
        draft.deletePostSuccess = false
        break
      }
      case DELETE_POST_SUCCESS: {
        draft.deletePostLoading = false
        draft.deletePostSuccess = true
        break
      }
      case DELETE_POST_FAILURE: {
        draft.deletePostSuccess = false
        draft.deletePostFailure = action.error
        break
      }
      case SEARCH_POSTS_REQUEST: {
        draft.searchPostsLoading = true
        draft.searchPostsSuccess = false
        break
      }
      case SEARCH_POSTS_SUCCESS: {
        draft.searchPostsLoading = false
        draft.searchPostsSuccess = true
        draft.searchPosts = draft.searchPosts.concat(action.data)
        break
      }
      case SEARCH_POSTS_FAILURE: {
        draft.searchPostsSuccess = false
        draft.searchPostsFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default posts
