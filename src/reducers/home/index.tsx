import produce from 'immer'
import { homeData } from 'types'

export interface HomeInitialState {
  homePosts: homeData[]

  fetchHomePostsLoading: boolean
  fetchHomePostsSuccess: boolean
  fetchHomePostsFailure: null | Error
}

export const initialState: HomeInitialState = {
  homePosts: [],

  fetchHomePostsLoading: false,
  fetchHomePostsSuccess: false,
  fetchHomePostsFailure: null,
}

// 액션 정의
export const FETCHING_HOME_POSTS_REQUEST = 'FETCHING_HOME_POSTS_REQUEST' as const
export const FETCHING_HOME_POSTS_SUCCESS = 'FETCHING_HOME_POSTS_SUCCESS' as const
export const FETCHING_HOME_POSTS_FAILURE = 'FETCHING_HOME_POSTS_FAILURE' as const

// 액션에 대한 타입 정의;
export interface FetchingHomePostsRequest {
  type: typeof FETCHING_HOME_POSTS_REQUEST
}

export interface FetchingHomePostsSuccess {
  type: typeof FETCHING_HOME_POSTS_SUCCESS
  homePosts: homeData
  data: []
}

export interface FetchingHomePostsFailure {
  type: typeof FETCHING_HOME_POSTS_FAILURE
  error: Error
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const fetchingHomePostsRequest = (): FetchingHomePostsRequest => ({
  type: FETCHING_HOME_POSTS_REQUEST,
})

export const fetchingHomePostsSuccess = (homePosts: homeData, data: []): FetchingHomePostsSuccess => ({
  type: FETCHING_HOME_POSTS_SUCCESS,
  homePosts,
  data,
})

export const fetchingHomePostsFailure = (error: Error): FetchingHomePostsFailure => ({
  type: FETCHING_HOME_POSTS_FAILURE,
  error,
})

export type HomeActions =
  | ReturnType<typeof fetchingHomePostsRequest>
  | ReturnType<typeof fetchingHomePostsSuccess>
  | ReturnType<typeof fetchingHomePostsFailure>

const home = (state: HomeInitialState = initialState, action: HomeActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_HOME_POSTS_REQUEST: {
        draft.fetchHomePostsLoading = true
        draft.fetchHomePostsSuccess = false
        break
      }
      case FETCHING_HOME_POSTS_SUCCESS: {
        draft.fetchHomePostsLoading = false
        draft.fetchHomePostsSuccess = true
        draft.homePosts = draft.homePosts.concat(action.data)
        break
      }
      case FETCHING_HOME_POSTS_FAILURE: {
        draft.fetchHomePostsSuccess = false
        draft.fetchHomePostsFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default home
