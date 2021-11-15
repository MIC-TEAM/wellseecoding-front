import produce from 'immer'
import { myPage, myPageSelfIntro, myPageEducations, myPageLinks, myPageWorks } from 'types'

export interface MyPageInitialState {
  myPages: myPage[]

  fetchMyPageLoading: boolean
  fetchMyPageSuccess: boolean
  fetchMyPageFailure: null | Error

  //자기소개 업데이트
  updateSelfIntroLoading: boolean
  updateSelfIntroSuccess: boolean
  updateSelfIntroFailure: null | Error

  // 학교 업데이트
  updateSchoolLoading: boolean
  updateSchoolSuccess: boolean
  updateSchoolFailure: null | Error

  // 경력 업데이트
  updateYearsLoading: boolean
  updateYearsSuccess: boolean
  updateYearsFailure: null | Error

  // 포트폴리오 업데이트
  updatePortfolioLoading: boolean
  updatePortfolioSuccess: boolean
  updatePortfolioFailure: null | Error
}

export const initialState: MyPageInitialState = {
  myPages: [],

  fetchMyPageLoading: false,
  fetchMyPageSuccess: false,

  fetchMyPageFailure: null,

  //자기소개 업데이트
  updateSelfIntroLoading: false,
  updateSelfIntroSuccess: false,
  updateSelfIntroFailure: null,

  // 학교 업데이트
  updateSchoolLoading: false,
  updateSchoolSuccess: false,
  updateSchoolFailure: null,

  // 경력 업데이트
  updateYearsLoading: false,
  updateYearsSuccess: false,
  updateYearsFailure: null,

  // 포트폴리오 업데이트
  updatePortfolioLoading: false,
  updatePortfolioSuccess: false,
  updatePortfolioFailure: null,
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

// 학교정보 업데이트 (수정)
export const UPDATE_SCHOOL_REQUEST = 'UPDATE_SCHOOL_REQUEST' as const
export const UPDATE_SCHOOL_SUCCESS = 'UPDATE_SCHOOL_SUCCESS' as const
export const UPDATE_SCHOOL_FAILURE = 'UPDATE_SCHOOL_FAILURE' as const

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
  data: myPageSelfIntro
}

export interface UpdateSelfIntroSuccess {
  type: typeof UPDATE_SELF_INTRO_SUCCESS
}

export interface UpdateSelfIntroFailure {
  type: typeof UPDATE_SELF_INTRO_FAILURE
  error: Error
}

// 학교정보 업데이트
export interface UpdateSchoolRequest {
  type: typeof UPDATE_SCHOOL_REQUEST
  data: myPageEducations
}

export interface UpdateSchoolSuccess {
  type: typeof UPDATE_SCHOOL_SUCCESS
}

export interface UpdateSchoolFailure {
  type: typeof UPDATE_SCHOOL_FAILURE
  error: Error
}

// 경력 업데이트
export interface UpdateYearsRequest {
  type: typeof UPDATE_YEARS_REQUEST
  data: myPageWorks
}

export interface UpdateYearsSuccess {
  type: typeof UPDATE_YEARS_SUCCESS
}

export interface UpdateYearsFailure {
  type: typeof UPDATE_YEARS_FAILURE
  error: Error
}

// 포트폴리오 업데이트
export interface UpdatePortfolioRequest {
  type: typeof UPDATE_PORTFOLIO_REQUEST
  data: myPageLinks
}

export interface UpdatePortfolioSuccess {
  type: typeof UPDATE_PORTFOLIO_SUCCESS
}

export interface UpdatePortfolioFailure {
  type: typeof UPDATE_PORTFOLIO_FAILURE
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

//자기소개 업데이트
export const updateSelfIntroRequest = (data: myPageSelfIntro): UpdateSelfIntroRequest => ({
  type: UPDATE_SELF_INTRO_REQUEST,
  data,
})

export const updateSelfIntroSuccess = (): UpdateSelfIntroSuccess => ({
  type: UPDATE_SELF_INTRO_SUCCESS,
})

export const updateSelfIntroFailure = (error: Error): UpdateSelfIntroFailure => ({
  type: UPDATE_SELF_INTRO_FAILURE,
  error,
})

//학교정보 업데이트
export const updateSchoolRequest = (data: myPageEducations): UpdateSchoolRequest => ({
  type: UPDATE_SCHOOL_REQUEST,
  data,
})

export const updateSchoolSuccess = (): UpdateSchoolSuccess => ({
  type: UPDATE_SCHOOL_SUCCESS,
})

export const updateSchoolFailure = (error: Error): UpdateSchoolFailure => ({
  type: UPDATE_SCHOOL_FAILURE,
  error,
})

//경력정보 업데이트
export const updateYearsRequest = (data: myPageWorks): UpdateYearsRequest => ({
  type: UPDATE_YEARS_REQUEST,
  data,
})

export const updateYearsSuccess = (): UpdateYearsSuccess => ({
  type: UPDATE_YEARS_SUCCESS,
})

export const updateYearsFailure = (error: Error): UpdateYearsFailure => ({
  type: UPDATE_YEARS_FAILURE,
  error,
})

//포트폴리오 업데이트
export const updatePortfolioRequest = (data: myPageLinks): UpdatePortfolioRequest => ({
  type: UPDATE_PORTFOLIO_REQUEST,
  data,
})

export const updatePortfolioSuccess = (): UpdatePortfolioSuccess => ({
  type: UPDATE_PORTFOLIO_SUCCESS,
})

export const updatePortfolioFailure = (error: Error): UpdatePortfolioFailure => ({
  type: UPDATE_PORTFOLIO_FAILURE,
  error,
})

export type MyPageActions =
  | ReturnType<typeof fetchingMyPageRequest>
  | ReturnType<typeof fetchingMyPageSuccess>
  | ReturnType<typeof fetchingMyPageFailure>
  //자기소개 업데이트
  | ReturnType<typeof updateSelfIntroRequest>
  | ReturnType<typeof updateSelfIntroSuccess>
  | ReturnType<typeof updateSelfIntroFailure>
  //학교정보 업데이트
  | ReturnType<typeof updateSchoolRequest>
  | ReturnType<typeof updateSchoolSuccess>
  | ReturnType<typeof updateSchoolFailure>
  //경력정보 업데이트
  | ReturnType<typeof updateYearsRequest>
  | ReturnType<typeof updateYearsSuccess>
  | ReturnType<typeof updateYearsFailure>
  //포트폴리오 업데이트
  | ReturnType<typeof updatePortfolioRequest>
  | ReturnType<typeof updatePortfolioSuccess>
  | ReturnType<typeof updatePortfolioFailure>

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
      case UPDATE_SCHOOL_REQUEST: {
        draft.updateSchoolLoading = true
        draft.updateSchoolSuccess = false
        break
      }
      case UPDATE_SCHOOL_SUCCESS: {
        draft.updateSchoolLoading = false
        draft.updateSchoolSuccess = true
        break
      }
      case UPDATE_SCHOOL_FAILURE: {
        draft.updateSchoolSuccess = false
        draft.updateSchoolFailure = action.error
        break
      }
      // 경력 업데이트 (수정)
      case UPDATE_YEARS_REQUEST: {
        draft.updateYearsLoading = true
        draft.updateYearsSuccess = false
        break
      }
      case UPDATE_YEARS_SUCCESS: {
        draft.updateYearsLoading = false
        draft.updateYearsSuccess = true
        break
      }
      case UPDATE_YEARS_FAILURE: {
        draft.updateYearsSuccess = false
        draft.updateYearsFailure = action.error
        break
      }
      // 포트폴리오 업데이트 (수정)
      case UPDATE_PORTFOLIO_REQUEST: {
        draft.updatePortfolioLoading = true
        draft.updatePortfolioSuccess = false
        break
      }
      case UPDATE_PORTFOLIO_SUCCESS: {
        draft.updatePortfolioLoading = false
        draft.updatePortfolioSuccess = true
        break
      }
      case UPDATE_PORTFOLIO_FAILURE: {
        draft.updatePortfolioSuccess = false
        draft.updatePortfolioFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default mypage
