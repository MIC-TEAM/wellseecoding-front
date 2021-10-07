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
export const OPEN_ISMODAL = 'OPEN_ISMODAL' as const
export const OPEN_EDITMODE = 'OPEN_EDITMODE' as const
export const CLOSE_EDITMODE = 'CLOSE_EDITMODE' as const
export const CLOSE_ISMODAL = 'CLOSE_ISEMODAL' as const

// 액션에 대한 타입 정의;
export interface OpenIsModal {
  type: typeof OPEN_ISMODAL
  data: string
}

export interface OpenEditMode {
  type: typeof OPEN_EDITMODE
}

export interface CloseEditMode {
  type: typeof CLOSE_EDITMODE
}

export interface CloseIsModal {
  type: typeof CLOSE_ISMODAL
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const setIsModal = (data: string): OpenIsModal => ({
  type: OPEN_ISMODAL,
  data,
})

export const setEditMode = (): OpenEditMode => ({
  type: OPEN_EDITMODE,
})

export const closeEditMode = (): CloseEditMode => ({
  type: CLOSE_EDITMODE,
})

export const closeIsModal = (): CloseIsModal => ({
  type: CLOSE_ISMODAL,
})

export type SetCommon =
  | ReturnType<typeof setIsModal>
  | ReturnType<typeof setEditMode>
  | ReturnType<typeof closeEditMode>
  | ReturnType<typeof closeIsModal>

const common = (state = initialState, action: SetCommon) =>
  produce(state, (draft) => {
    switch (action.type) {
      case OPEN_ISMODAL: {
        draft.isModal.open = true
        draft.isModal.uniqId = action.data
        break
      }
      case OPEN_EDITMODE: {
        draft.editMode = true
        break
      }
      case CLOSE_EDITMODE: {
        draft.editMode = false
        break
      }
      case CLOSE_ISMODAL: {
        draft.isModal.open = false
        break
      }

      default:
        return state
    }
  })

export default common
