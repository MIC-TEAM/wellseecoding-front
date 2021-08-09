import React from 'react'
import { TodoType } from 'types'
import { MainContent } from './style'

type Props = {
  datas: TodoType[] | undefined
}

function DataForm(props: Props) {
  const { datas } = props
  // props로 받는 datas 객체 확인하기
  console.log('datas: ', datas)

  return (
    <div style={{ marginTop: 50 }}>
      {datas &&
        datas.map((data) => (
          <MainContent key={data.id} complete={data.completed}>
            {data.completed === false ? <p>non-completed</p> : <p>completed</p>}
            <p>userId: {data.userId}</p>
            <p>title: {data.title}</p>
          </MainContent>
        ))}
    </div>
  )
}

export default DataForm
