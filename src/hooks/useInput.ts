import { useReducer } from 'react'

function reducer(state: any, action: { name: any; value: any }) {
  return {
    ...state,
    [action.name]: action.value,
  }
}

export default function useInputs(initialState: any) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const onChangeInput = (e: { target: { name: any; value: any } }) => {
    dispatch(e.target)
  }
  return [state, onChangeInput]
}
