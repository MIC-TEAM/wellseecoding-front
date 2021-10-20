import produce from 'immer'
import { Experience } from 'types'

// initialState 타입 정의
export interface SignUpIntialState {
  removeItemLoading: boolean
  removeItemDone: boolean
  removeItemError: boolean | null | any
  item: Experience[]
}

// initialState 정의
export const initialState: SignUpIntialState = {
  removeItemLoading: false,
  removeItemDone: false,
  removeItemError: null,
  item: [],
}

// 액션 정의
export const SIGNUP_EXPERIENCE_REMOVE_REQUEST = 'SIGNUP_EXPERIENCE_REMOVE_REQUEST' as const
export const SIGNUP_EXPERIENCE_REMOVE_SUCCECSS = 'SIGNUP_EXPERIENCE_REMOVE_SUCCECSS' as const
export const SIGNUP_EXPERIENCE_REMOVE_FAIRIUR = 'SIGNUP_EXPERIENCE_REMOVE_FAIRIUR' as const

// 액션에 대한 타입 정의;
export interface SignupRequest {
  type: typeof SIGNUP_EXPERIENCE_REMOVE_REQUEST
}
export interface SignupRequest {
  type: typeof SIGNUP_EXPERIENCE_REMOVE_REQUEST
}
export interface SignupRequest {
  type: typeof SIGNUP_EXPERIENCE_REMOVE_REQUEST
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const RemoveItemRequest = () => ({
  type: SIGNUP_EXPERIENCE_REMOVE_REQUEST,
})

export const RemoveItemSuccecss = () => ({
  type: SIGNUP_EXPERIENCE_REMOVE_SUCCECSS,
  data: { PostId: {} },
})

export const RemoveItemFailure = () => ({
  type: SIGNUP_EXPERIENCE_REMOVE_FAIRIUR,
  error: Error,
})

export type Signup =
  | ReturnType<typeof RemoveItemRequest>
  | ReturnType<typeof RemoveItemSuccecss>
  | ReturnType<typeof RemoveItemFailure>
const signup = (state: SignUpIntialState = initialState, action: Signup) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGNUP_EXPERIENCE_REMOVE_REQUEST: {
        draft.removeItemLoading = true
        draft.removeItemDone = false
        draft.removeItemError = null
        break
      }
      case SIGNUP_EXPERIENCE_REMOVE_SUCCECSS: {
        draft.removeItemLoading = false
        draft.removeItemDone = true
        draft.item = draft.item.filter((v) => v.id !== action.data.PostId)
        break
      }
      case SIGNUP_EXPERIENCE_REMOVE_FAIRIUR: {
        draft.removeItemLoading = false
        draft.removeItemError = action.error
        break
      }

      default:
        return state
    }
  })

export default signup
