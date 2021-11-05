/* eslint-disable prettier/prettier */
import axios from 'axios'
import WellseeError from 'components/Common/wellseeError'
import React, { useCallback, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/router'

/*
1. 리다이렉트 받아서 토큰을 분해
2. 분해한 데이터 (id, username)을 로컬 스토리지에 저장
3. 성공적으로 동작할 경우 Home 또는 Together 페이지로 전환
*/

const Token = () => {
  const [response, setResponse] = useState('')

  const [tokenId, setTokenId] = useState<string>('')
  const [decodedUserId, setDecodedUserId] = useState<string>('')
  const [decodedUserName, setDecodedUserName] = useState<string>('')

  const [likes, setLikes] = useState([])
  const [registeredGroup, setRegisteredGroup] = useState([])

  const router = useRouter()

  /* ① document.cookie 스토리지에서 전달 받은 access_token을 분해한다 */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      splitToken(document.cookie)
    }
  }, [])

  /* ② access_token의 value가 정상적으로 response state안에 저장되었을 경우, 해당 토큰을 복호화한다 */
  useEffect(() => {
    if (response.length) parseJwt(response)
  }, [response])

  /* ③ 토큰 id가 정상적으로 생성되었다면 payload에서 사용자 정보를 추출한다 */
  useEffect(() => {
    if (tokenId) {
      checkId(tokenId)
    }
  }, [tokenId])

  /* ④ 마지막 복호화된 토큰의 userId 를 로컬 스토리지에 저장한다 */
  useEffect(() => {
    if (decodedUserId) localStorage.setItem('id', decodedUserId)
    if (decodedUserName) localStorage.setItem('userName', decodedUserName)
  }, [decodedUserId, decodedUserName])

  // ⑤ 토큰이 있다면 좋아요한 게시물이 있는지 요청을 보낸다
  useEffect(() => {
    if (typeof window !== 'undefined' && response.length) {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
      Promise.allSettled([getLikesGroup(), getRegisteredGroup()]).then((res) => {
        if (res[0].status === 'fulfilled' && res[1].status === 'fulfilled') {
          router.push('/home')
        } else {
          console.error('error')
        }
      })
    }
  }, [response, router])

  // ⑥ state에 저장한 좋아요 한 게시물 확인
  useEffect(() => {
    if (likes.length) {
      localStorage.setItem('myLikes', JSON.stringify(likes))
    }
  }, [likes])

  // ⑦ state에 저장한 가입된 그룹 확인
  useEffect(() => {
    if (registeredGroup.length) {
      localStorage.setItem('registered', JSON.stringify(registeredGroup))
    }
  }, [registeredGroup])

  /* 토큰을 분해해서 response state에 저장하는 함수 */
  const splitToken = (token: string) => {
    if (token) {
      setResponse(token.replace('access_token=', ''))
      localStorage.setItem('access_token', token.replace('access_token=', ''))
    } else {
      alert('쿠키에 저장된 토큰이 없습니다')
      return false
    }
  }

  /* JWT 토큰을 디코딩(복호화)한다. */
  const parseJwt = (token: any) => {
    try {
      return setTokenId(jwt_decode(token))
    } catch (e) {
      return null
    }
  }

  /* 복호화된 토큰 중 userId 정보를 분리한다. */
  const checkId = (tokenId: any) => {
    // 객체를 순회할 때는 for in문을 사용한다.
    for (const key in tokenId) {
      if (key === 'sub') {
        setDecodedUserId(tokenId[key])
      }
      if (key === 'uname') {
        setDecodedUserName(tokenId[key])
      }
    }
  }

  const getLikesGroup = useCallback(async () => {
    try {
      await axios.get('/api/v1/users/likes').then((res) => {
        setLikes(res.data.likes)
      })
    } catch (err) {
      console.error(err)
    }
  }, [])

  const getRegisteredGroup = useCallback(async () => {
    try {
      await axios.get('/api/v1/users/groups/registered').then((res) => setRegisteredGroup(res.data.groups))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <div>
      <WellseeError text={'로그인 처리 중'} />
    </div>
  )
}

export default Token
