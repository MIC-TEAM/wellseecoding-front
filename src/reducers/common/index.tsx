import produce from 'immer'

export interface CommonState {
  isModal: boolean
}

// initialState 정의
export const initialState: CommonState = {
  isModal: false,
}

// 액션 정의
export const SET_ISMODAL = 'SET_ISMODAL' as const

// 액션에 대한 타입 정의;
export interface SetIsModal {
  type: typeof SET_ISMODAL
}

// 리듀서 안에 들어갈 액션 타입에 대한 액션 생성 함수 정의

export const setIsModal = (): SetIsModal => ({
  type: SET_ISMODAL,
})

export type SetCommon = ReturnType<typeof setIsModal>

const common = (state = initialState, action: SetCommon) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ISMODAL: {
        draft.isModal = !state.isModal
        break
      }

      default:
        return state
    }
  })

export default common
