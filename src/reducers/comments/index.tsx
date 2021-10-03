import produce from 'immer'
import { CommentType } from 'types'

// initialState 타입 정의
export interface PostsIntialState {
  comments: CommentType[]

  writeCommentLoading: boolean
  writeCommentSuccess: boolean
  writeCommentFailure: null | Error
}

// initialState 정의
export const initialState: PostsIntialState = {
  comments: [
    {
      id: 1,
      name: '이준희',
      job: '프론트엔드',
      text: '언제 시작하실 건가요?',
      me: true,
      date: '2021-10-03',
    },
    {
      id: 2,
      name: '배일섭',
      job: '백엔드',
      text: '다음주에 구글 밋 얘기해봐요!',
      me: false,
      date: '2021-10-03',
    },
  ],

  writeCommentLoading: false,
  writeCommentSuccess: false,
  writeCommentFailure: null,
}

// 액션 정의

export const WRITE_COMMENT_REQUEST = 'WRITE_COMMENT_REQUEST' as const
export const WRITE_COMMENT_SUCCESS = 'WRITE_COMMENT_SUCCESS' as const
export const WRITE_COMMENT_FAILURE = 'WRITE_COMMENT_FAILURE' as const

// 액션에 대한 타입 정의;
export interface WriteCommentRequest {
  type: typeof WRITE_COMMENT_REQUEST
}

export interface WriteCommentSuccess {
  type: typeof WRITE_COMMENT_SUCCESS
  data: []
}

export interface WriteCommentFailure {
  type: typeof WRITE_COMMENT_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const writeCommentRequest = (): WriteCommentRequest => ({
  type: WRITE_COMMENT_REQUEST,
})

export const writeCommentSuccess = (): WriteCommentSuccess => ({
  type: WRITE_COMMENT_SUCCESS,
  data: [],
})

export const writeCommentFailure = (error: Error): WriteCommentFailure => ({
  type: WRITE_COMMENT_FAILURE,
  error,
})

export type FetchingPosts =
  | ReturnType<typeof writeCommentRequest>
  | ReturnType<typeof writeCommentSuccess>
  | ReturnType<typeof writeCommentFailure>

const comments = (state: PostsIntialState = initialState, action: FetchingPosts) =>
  produce(state, (draft) => {
    switch (action.type) {
      case WRITE_COMMENT_REQUEST: {
        draft.writeCommentLoading = true
        draft.writeCommentSuccess = false
        break
      }
      case WRITE_COMMENT_SUCCESS: {
        draft.writeCommentLoading = false
        draft.writeCommentSuccess = true
        draft.comments = draft.comments.concat(action.data)
        break
      }
      case WRITE_COMMENT_FAILURE: {
        draft.writeCommentSuccess = false
        draft.writeCommentFailure = action.error
        break
      }

      default:
        return state
    }
  })

export default comments
