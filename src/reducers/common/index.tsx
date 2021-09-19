import produce from 'immer'

export interface CommonState {
  isModal: {
    open: boolean
    uniqId: string
  }
  editMode: boolean
}

// initialState 정의
export const initialState: CommonState = {
  isModal: {
    open: false,
    uniqId: '',
  },
  editMode: false,
}

// 액션 정의
export const SET_ISMODAL = 'SET_ISMODAL' as const
export const SET_EDITMODE = 'SET_EDITMODE' as const

// 액션에 대한 타입 정의;
export interface SetIsModal {
  type: typeof SET_ISMODAL
  data: string
}

export interface SetEditMode {
  type: typeof SET_EDITMODE
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const setIsModal = (data: string): SetIsModal => ({
  type: SET_ISMODAL,
  data,
})

export const setEditMode = (): SetEditMode => ({
  type: SET_EDITMODE,
})

export type SetCommon = ReturnType<typeof setIsModal> | ReturnType<typeof setEditMode>

const common = (state = initialState, action: SetCommon) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ISMODAL: {
        draft.isModal.open = !state.isModal.open
        draft.isModal.uniqId = action.data
        break
      }
      case SET_EDITMODE: {
        draft.editMode = !state.editMode
        break
      }

      default:
        return state
    }
  })

export default common
