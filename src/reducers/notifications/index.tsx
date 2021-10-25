import produce from 'immer'
import { notificationType } from 'types'

interface notiInitialState {
  notifications: notificationType[]

  fetchNotisLoading: boolean
  fetchNotisSuccess: boolean
  fetchNotisFailure: null | Error
}

const initialState: notiInitialState = {
  notifications: [],

  fetchNotisLoading: false,
  fetchNotisSuccess: false,
  fetchNotisFailure: null,
}

// 액션 정의
export const FETCHING_NOTIS_REQUEST = 'FETCHING_NOTIS_REQUEST' as const
export const FETCHING_NOTIS_SUCCESS = 'FETCHING_NOTIS_SUCCESS' as const
export const FETCHING_NOTIS_FAILURE = 'FETCHING_NOTIS_FAILURE' as const

// 액션에 대한 타입에 대한 인터페이스 정의
export interface FetchingNotisRequest {
  type: typeof FETCHING_NOTIS_REQUEST
}

export interface FetchingNotisSuccess {
  type: typeof FETCHING_NOTIS_SUCCESS
  notifications: notificationType
  data: []
}

export interface FetchingNotisFailure {
  type: typeof FETCHING_NOTIS_FAILURE
  error: Error
}

// 액션 생성 함수 정의

export const fetchingNotisRequest = (): FetchingNotisRequest => ({
  type: FETCHING_NOTIS_REQUEST,
})

export const fetchingNotisSuccess = (notifications: notificationType, data: []): FetchingNotisSuccess => ({
  type: FETCHING_NOTIS_SUCCESS,
  notifications,
  data,
})

export const fetchingNotisFailure = (error: Error): FetchingNotisFailure => ({
  type: FETCHING_NOTIS_FAILURE,
  error,
})

export type NotificationActions =
  | ReturnType<typeof fetchingNotisRequest>
  | ReturnType<typeof fetchingNotisSuccess>
  | ReturnType<typeof fetchingNotisFailure>

const notifications = (state: notiInitialState = initialState, action: NotificationActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_NOTIS_REQUEST: {
        draft.fetchNotisLoading = true
        draft.fetchNotisSuccess = false
        break
      }
      case FETCHING_NOTIS_SUCCESS: {
        draft.fetchNotisLoading = false
        draft.fetchNotisSuccess = true
        draft.notifications = draft.notifications.concat(action.data)
        break
      }
      case FETCHING_NOTIS_FAILURE: {
        draft.fetchNotisSuccess = false
        draft.fetchNotisFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default notifications
