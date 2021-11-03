import produce from 'immer'
import { myPage } from 'types'

export interface MyPageInitialState {
  myPages: myPage[]

  fetchMyPageLoading: boolean
  fetchMyPageSuccess: boolean
  fetchMyPageFailure: null | Error
}

export const initialState: MyPageInitialState = {
  myPages: [],

  fetchMyPageLoading: false,
  fetchMyPageSuccess: false,
  fetchMyPageFailure: null,
}

// 액션 정의
export const FETCHING_MYPAGE_REQUEST = 'FETCHING_MYPAGE_REQUEST' as const
export const FETCHING_MYPAGE_SUCCESS = 'FETCHING_MYPAGE_SUCCESS' as const
export const FETCHING_MYPAGE_FAILURE = 'FETCHING_MYPAGE_FAILURE' as const

// 액션에 대한 타입 정의;
export interface FetchingMyPageRequest {
  type: typeof FETCHING_MYPAGE_REQUEST
}

export interface FetchingMyPageSuccess {
  type: typeof FETCHING_MYPAGE_SUCCESS
  myPages: myPage
  data: []
}

export interface FetchingMyPageFailure {
  type: typeof FETCHING_MYPAGE_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의
export const fetchingMyPageRequest = (): FetchingMyPageRequest => ({
  type: FETCHING_MYPAGE_REQUEST,
})

export const fetchingMyPageSuccess = (myPages: myPage, data: []): FetchingMyPageSuccess => ({
  type: FETCHING_MYPAGE_SUCCESS,
  myPages,
  data,
})

export const fetchingMyPageFailure = (error: Error): FetchingMyPageFailure => ({
  type: FETCHING_MYPAGE_FAILURE,
  error,
})

export type MyPageActions =
  | ReturnType<typeof fetchingMyPageRequest>
  | ReturnType<typeof fetchingMyPageSuccess>
  | ReturnType<typeof fetchingMyPageFailure>

const mypage = (state: MyPageInitialState = initialState, action: MyPageActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_MYPAGE_REQUEST: {
        draft.fetchMyPageLoading = true
        draft.fetchMyPageSuccess = false
        break
      }
      case FETCHING_MYPAGE_SUCCESS: {
        draft.fetchMyPageLoading = false
        draft.fetchMyPageSuccess = true
        draft.myPages = draft.myPages.concat(action.data)
        break
      }
      case FETCHING_MYPAGE_FAILURE: {
        draft.fetchMyPageSuccess = false
        draft.fetchMyPageFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default mypage
