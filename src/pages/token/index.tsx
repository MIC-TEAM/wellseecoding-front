import React, { useEffect, useState } from 'react'

/*
1. 리다이렉트 받아서 토큰을 분해
2. 분해한 데이터 (id, username)을 로컬 스토리지에 저장
3. 성공적으로 동작할 경우 Home 또는 Together 페이지로 전환
*/

const Token = () => {
  const [response, setResponse] = useState('')

  useEffect(() => {
    console.log('response:', response)
  }, [response])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      splitToken(document.cookie)
    }
  }, [])

  const splitToken = (token: string) => {
    setResponse(token.replace('access_token=', ''))
  }

  return (
    <div>
      <h1 style={{ fontSize: 32 }}>Token 페이지입니다</h1>
      <ul>
        <li>1. 리다이렉트 받아서 토큰을 분해</li>
        <li>2. 분해한 데이터 (id, username)을 로컬 스토리지에 저장</li>
        <li>3. 성공적으로 동작할 경우 Home 또는 Together 페이지로 전환</li>
      </ul>
    </div>
  )
}

export default Token
