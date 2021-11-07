import produce from 'immer'
import { myPage } from 'types'

export interface MyPageInitialState {
  myPages: myPage[]

  fetchMyPageLoading: boolean
  fetchMyPageSuccess: boolean
  fetchMyPageFailure: null | Error

  updateSelfIntroLoading: boolean
  updateSelfIntroSuccess: boolean
  updateSelfIntroFailure: null | Error
}

export const initialState: MyPageInitialState = {
  myPages: [],

  fetchMyPageLoading: false,
  fetchMyPageSuccess: false,
  fetchMyPageFailure: null,

  updateSelfIntroLoading: false,
  updateSelfIntroSuccess: false,
  updateSelfIntroFailure: null,
}

// 액션 정의
// 마이페이지 데이터 불러오기
export const FETCHING_MYPAGE_REQUEST = 'FETCHING_MYPAGE_REQUEST' as const
export const FETCHING_MYPAGE_SUCCESS = 'FETCHING_MYPAGE_SUCCESS' as const
export const FETCHING_MYPAGE_FAILURE = 'FETCHING_MYPAGE_FAILURE' as const

// 자기소개 업데이트 (수정)
export const UPDATE_SELF_INTRO_REQUEST = 'UPDATE_SELF_INTRO_REQUEST' as const
export const UPDATE_SELF_INTRO_SUCCESS = 'UPDATE_SELF_INTRO_SUCCESS' as const
export const UPDATE_SELF_INTRO_FAILURE = 'UPDATE_SELF_INTRO_FAILURE' as const

// 경력 업데이트 (수정)
export const UPDATE_YEARS_REQUEST = 'UPDATE_YEARS_REQUEST' as const
export const UPDATE_YEARS_SUCCESS = 'UPDATE_YEARS_SUCCESS' as const
export const UPDATE_YEARS_FAILURE = 'UPDATE_YEARS_FAILURE' as const

// 포트폴리오 업데이트 (수정)
export const UPDATE_PORTFOLIO_REQUEST = 'UPDATE_PORTFOLIO_REQUEST' as const
export const UPDATE_PORTFOLIO_SUCCESS = 'UPDATE_PORTFOLIO_SUCCESS' as const
export const UPDATE_PORTFOLIO_FAILURE = 'UPDATE_PORTFOLIO_FAILURE' as const

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

// 자기소개 업데이트
export interface UpdateSelfIntroRequest {
  type: typeof UPDATE_SELF_INTRO_REQUEST
}

export interface UpdateSelfIntroSuccess {
  type: typeof UPDATE_SELF_INTRO_SUCCESS
}

export interface UpdateSelfIntroFailure {
  type: typeof UPDATE_SELF_INTRO_FAILURE
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

export const UpdateSelfIntroRequest = (): UpdateSelfIntroRequest => ({
  type: UPDATE_SELF_INTRO_REQUEST,
})

export const UpdateSelfIntroSuccess = (): UpdateSelfIntroSuccess => ({
  type: UPDATE_SELF_INTRO_SUCCESS,
})

export const UpdateSelfIntroFailure = (error: Error): UpdateSelfIntroFailure => ({
  type: UPDATE_SELF_INTRO_FAILURE,
  error,
})

export type MyPageActions =
  | ReturnType<typeof fetchingMyPageRequest>
  | ReturnType<typeof fetchingMyPageSuccess>
  | ReturnType<typeof fetchingMyPageFailure>
  | ReturnType<typeof UpdateSelfIntroRequest>
  | ReturnType<typeof UpdateSelfIntroSuccess>
  | ReturnType<typeof UpdateSelfIntroFailure>

const mypage = (state: MyPageInitialState = initialState, action: MyPageActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      // 마이페이지 상세정보 불러오기
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
      // 자기소개 업데이트 (수정)
      case UPDATE_SELF_INTRO_REQUEST: {
        draft.updateSelfIntroLoading = true
        draft.updateSelfIntroSuccess = false
        break
      }
      case UPDATE_SELF_INTRO_SUCCESS: {
        draft.updateSelfIntroLoading = false
        draft.updateSelfIntroSuccess = true
        break
      }
      case UPDATE_SELF_INTRO_FAILURE: {
        draft.updateSelfIntroSuccess = false
        draft.updateSelfIntroFailure = action.error
        break
      }
      // 학교정보 업데이트 (수정)
      // 경력 업데이트 (수정)
      // 포트폴리오 업데이트 (수정)
      // 좋아요 게시글 불러오기
      default:
        return state
    }
  })

export default mypage
