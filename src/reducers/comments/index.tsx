import produce from 'immer'
import { FetchCommentsType, WriteCommentType } from 'src/types'

// initialState 타입 정의
export interface PostsIntialState {
  comments: FetchCommentsType[]

  fetchCommentsLoading: boolean
  fetchCommentsSuccess: boolean
  fetchCommentsFailure: null | Error

  writeCommentLoading: boolean
  writeCommentSuccess: boolean
  writeCommentFailure: null | Error

  deleteCommentLoading: boolean
  deleteCommentSuccess: boolean
  deleteCommentFailure: null | Error

  updateCommentLoading: boolean
  updateCommentSuccess: boolean
  updateCommentFailure: null | Error
}

// initialState 정의
export const initialState: PostsIntialState = {
  comments: [],

  fetchCommentsLoading: false,
  fetchCommentsSuccess: false,
  fetchCommentsFailure: null,

  writeCommentLoading: false,
  writeCommentSuccess: false,
  writeCommentFailure: null,

  deleteCommentLoading: false,
  deleteCommentSuccess: false,
  deleteCommentFailure: null,

  updateCommentLoading: false,
  updateCommentSuccess: false,
  updateCommentFailure: null,
}

// 액션 정의

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST' as const
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS' as const
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE' as const

export const WRITE_COMMENT_REQUEST = 'WRITE_COMMENT_REQUEST' as const
export const WRITE_COMMENT_SUCCESS = 'WRITE_COMMENT_SUCCESS' as const
export const WRITE_COMMENT_FAILURE = 'WRITE_COMMENT_FAILURE' as const

export const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST' as const
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS' as const
export const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE' as const

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST' as const
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS' as const
export const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE' as const

export const RESET_COMMENTS_LIST = 'RESET_COMMENTS_LIST' as const

// 액션에 대한 타입 정의;
export interface FetchCommentsRequest {
  type: typeof FETCH_COMMENTS_REQUEST
  data: number
}

export interface FetchCommentsSuccess {
  type: typeof FETCH_COMMENTS_SUCCESS
  data: []
}

export interface FetchCommentsFailure {
  type: typeof FETCH_COMMENTS_FAILURE
  error: Error
}

export interface WriteCommentRequest {
  type: typeof WRITE_COMMENT_REQUEST
  data: WriteCommentType
}

export interface WriteCommentSuccess {
  type: typeof WRITE_COMMENT_SUCCESS
  data: []
}

export interface WriteCommentFailure {
  type: typeof WRITE_COMMENT_FAILURE
  error: Error
}

export interface DeleteCommentRequest {
  type: typeof DELETE_COMMENT_REQUEST
  data: {
    postId: number
    commentId: number
  }
}

export interface DeleteCommentSuccess {
  type: typeof DELETE_COMMENT_SUCCESS
  data: []
}

export interface DeleteCommentFailure {
  type: typeof DELETE_COMMENT_FAILURE
  error: Error
}

export interface UpdateCommentRequest {
  type: typeof UPDATE_COMMENT_REQUEST
  data: {
    postId: number
    commentId: number
    text: string
  }
}

export interface UpdateCommentSuccess {
  type: typeof UPDATE_COMMENT_SUCCESS
  data: []
}

export interface UpdateCommentFailure {
  type: typeof UPDATE_COMMENT_FAILURE
  error: Error
}

export interface ResetCommentsList {
  type: typeof RESET_COMMENTS_LIST
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const fetchCommentsRequest = (data: number): FetchCommentsRequest => ({
  type: FETCH_COMMENTS_REQUEST,
  data,
})

export const fetchCommentsSuccess = (): FetchCommentsSuccess => ({
  type: FETCH_COMMENTS_SUCCESS,
  data: [],
})

export const fetchCommentsFailure = (error: Error): FetchCommentsFailure => ({
  type: FETCH_COMMENTS_FAILURE,
  error,
})

export const writeCommentRequest = (data: WriteCommentType): WriteCommentRequest => ({
  type: WRITE_COMMENT_REQUEST,
  data,
})

export const writeCommentSuccess = (): WriteCommentSuccess => ({
  type: WRITE_COMMENT_SUCCESS,
  data: [],
})

export const writeCommentFailure = (error: Error): WriteCommentFailure => ({
  type: WRITE_COMMENT_FAILURE,
  error,
})

export const deleteCommentRequest = (data: { postId: number; commentId: number }): DeleteCommentRequest => ({
  type: DELETE_COMMENT_REQUEST,
  data,
})

export const deleteCommentSuccess = (): DeleteCommentSuccess => ({
  type: DELETE_COMMENT_SUCCESS,
  data: [],
})

export const deleteCommentFailure = (error: Error): DeleteCommentFailure => ({
  type: DELETE_COMMENT_FAILURE,
  error,
})

export const updateCommentRequest = (data: {
  postId: number
  commentId: number
  text: string
}): UpdateCommentRequest => ({
  type: UPDATE_COMMENT_REQUEST,
  data,
})

export const updateCommentSuccess = (): UpdateCommentSuccess => ({
  type: UPDATE_COMMENT_SUCCESS,
  data: [],
})

export const updateCommentFailure = (error: Error): UpdateCommentFailure => ({
  type: UPDATE_COMMENT_FAILURE,
  error,
})

export const resetCommentRequest = (): ResetCommentsList => ({
  type: RESET_COMMENTS_LIST,
})

export type FetchingPosts =
  | ReturnType<typeof fetchCommentsRequest>
  | ReturnType<typeof fetchCommentsSuccess>
  | ReturnType<typeof fetchCommentsFailure>
  | ReturnType<typeof writeCommentRequest>
  | ReturnType<typeof writeCommentSuccess>
  | ReturnType<typeof writeCommentFailure>
  | ReturnType<typeof deleteCommentRequest>
  | ReturnType<typeof deleteCommentSuccess>
  | ReturnType<typeof deleteCommentFailure>
  | ReturnType<typeof updateCommentRequest>
  | ReturnType<typeof updateCommentSuccess>
  | ReturnType<typeof updateCommentFailure>
  | ReturnType<typeof resetCommentRequest>

const comments = (state: PostsIntialState = initialState, action: FetchingPosts) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RESET_COMMENTS_LIST: {
        draft.comments = []
        break
      }
      case FETCH_COMMENTS_REQUEST: {
        draft.fetchCommentsLoading = true
        draft.fetchCommentsSuccess = false
        break
      }
      case FETCH_COMMENTS_SUCCESS: {
        draft.fetchCommentsLoading = false
        draft.fetchCommentsSuccess = true
        draft.comments = draft.comments.concat(action.data)
        break
      }
      case FETCH_COMMENTS_FAILURE: {
        draft.writeCommentSuccess = false
        draft.writeCommentFailure = action.error
        break
      }
      case WRITE_COMMENT_REQUEST: {
        draft.writeCommentLoading = true
        draft.writeCommentSuccess = false
        break
      }
      case WRITE_COMMENT_SUCCESS: {
        draft.writeCommentLoading = false
        draft.writeCommentSuccess = true
        break
      }
      case WRITE_COMMENT_FAILURE: {
        draft.writeCommentSuccess = false
        draft.writeCommentFailure = action.error
        break
      }
      case DELETE_COMMENT_REQUEST: {
        draft.deleteCommentLoading = true
        draft.deleteCommentSuccess = false
        break
      }
      case DELETE_COMMENT_SUCCESS: {
        draft.deleteCommentLoading = false
        draft.deleteCommentSuccess = true
        break
      }
      case DELETE_COMMENT_FAILURE: {
        draft.deleteCommentSuccess = false
        draft.deleteCommentFailure = action.error
        break
      }
      case UPDATE_COMMENT_REQUEST: {
        draft.updateCommentLoading = true
        draft.updateCommentSuccess = false
        break
      }
      case UPDATE_COMMENT_SUCCESS: {
        draft.updateCommentLoading = false
        draft.updateCommentSuccess = true
        // draft.comments.find((v) => v.commentId === action.data.commentId).text = action.data.text
        break
      }
      case UPDATE_COMMENT_FAILURE: {
        draft.updateCommentSuccess = false
        draft.updateCommentFailure = action.error
        break
      }

      default:
        return state
    }
  })

export default comments
