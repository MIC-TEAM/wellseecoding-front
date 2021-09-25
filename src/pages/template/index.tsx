import React, { useCallback, useState } from 'react'
import DataForm from 'components/DataForm'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { FETCHING_TODOS_REQUEST } from 'reducers/todos'

function Template() {
  const dispatch = useDispatch()
  const { todos } = useSelector((state: RootState) => state.todos)
  // 배열의 첫 번째 인덱스
  const [firstNum, setFirstNum] = useState(0)
  // 배열의 마지막 번째 인덱스
  const [lastNum, setLastNum] = useState(20)

  const getAPI = () => {
    dispatch({
      type: FETCHING_TODOS_REQUEST,
      data: {
        first: firstNum,
        last: lastNum,
      },
    })
    updateNumber()
  }

  // useState로 받아오는 배열의 인덱스 추가
  const updateNumber = useCallback(() => {
    setFirstNum((num) => num + 20)
    setLastNum((num) => num + 20)
  }, [])

  return (
    <div>
      <h1 css={h1Style}>HELLO MIC!</h1>

      <DataForm datas={todos} />
      <button css={btnStyle} onClick={getAPI}>
        Click Me!
      </button>
    </div>
  )
}

export default Template

export const h1Style = css`
  color: hotpink;
  font-size: 7rem;
  transition: 500ms;
  text-align: center;
  margin-top: 50px;

  &:hover {
    background-color: hotpink;
    color: white;
  }
`

export const btnStyle = css`
  cursor: pointer;
  font-size: 4rem;
  padding: 10px;
  border: none;
  background-color: hotpink;
  color: white;
`
