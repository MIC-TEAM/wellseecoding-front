import produce from 'immer'

type notificationType = {
  id: number
  senderUserId: number
  senderUserName: string
  receiverUserId: number
  receiverUserName: string
  postId: number
  postTitle: string
  eventCategory: string
  timestamp: number
  read: boolean
}

interface notiInitialState {
  notifications: any[]
  // notifications: notificationType[]

  fetchNotisLoading: boolean
  fetchNotisSuccess: boolean
  fetchNotisFailure: null | Error

  updateNotiLoading: boolean
  updateNotiSuccess: boolean
  updateNotiFailure: null | Error
}

const initialState: notiInitialState = {
  notifications: [],

  fetchNotisLoading: false,
  fetchNotisSuccess: false,
  fetchNotisFailure: null,

  updateNotiLoading: false,
  updateNotiSuccess: false,
  updateNotiFailure: null,
}

// 액션 정의
export const FETCHING_NOTIS_REQUEST = 'FETCHING_NOTIS_REQUEST' as const
export const FETCHING_NOTIS_SUCCESS = 'FETCHING_NOTIS_SUCCESS' as const
export const FETCHING_NOTIS_FAILURE = 'FETCHING_NOTIS_FAILURE' as const

export const UPDATE_NOTI_REQUEST = 'UPDATE_NOTI_REQUEST' as const
export const UPDATE_NOTI_SUCCESS = 'UPDATE_NOTI_SUCCESS' as const
export const UPDATE_NOTI_FAILURE = 'UPDATE_NOTI_FAILURE' as const

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

export interface UpdateNotiRequest {
  type: typeof UPDATE_NOTI_REQUEST
  data: number
}

export interface UpdateNotiSuccess {
  type: typeof UPDATE_NOTI_SUCCESS
  notifications: notificationType
  data: number
}

export interface UpdateNotiFailure {
  type: typeof UPDATE_NOTI_FAILURE
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

export const updateNotiRequest = (id: number): UpdateNotiRequest => ({
  type: UPDATE_NOTI_REQUEST,
  data: id,
})

export const updateNotiSuccess = (notifications: notificationType, id: number): UpdateNotiSuccess => ({
  type: UPDATE_NOTI_SUCCESS,
  notifications,
  data: id,
})

export const updateNotiFailure = (error: Error): UpdateNotiFailure => ({
  type: UPDATE_NOTI_FAILURE,
  error,
})

export type NotificationActions =
  | ReturnType<typeof fetchingNotisRequest>
  | ReturnType<typeof fetchingNotisSuccess>
  | ReturnType<typeof fetchingNotisFailure>
  | ReturnType<typeof updateNotiRequest>
  | ReturnType<typeof updateNotiSuccess>
  | ReturnType<typeof updateNotiFailure>

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
      case UPDATE_NOTI_REQUEST: {
        draft.updateNotiLoading = true
        draft.updateNotiSuccess = false
        /* 둘다 가능한 로직 */
        // draft.notifications.map((v) => (v.id === action.data ? { read: !v.read } : v))
        break
      }
      case UPDATE_NOTI_SUCCESS: {
        draft.updateNotiLoading = false
        draft.updateNotiSuccess = true
        draft.notifications.find((v) => v.id === action.data).read = true
        break
      }
      case UPDATE_NOTI_FAILURE: {
        draft.updateNotiSuccess = false
        draft.updateNotiFailure = action.error
        break
      }
      default:
        return state
    }
  })

export default notifications
