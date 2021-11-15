/* eslint-disable prettier/prettier */
import axios from 'axios'
import WellseeError from 'components/Common/wellseeError'
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Token = () => {
  const [response, setResponse] = useState('')

  const [tokenId, setTokenId] = useState<string>('')
  const [decodedUserId, setDecodedUserId] = useState<string>('')
  const [decodedUserName, setDecodedUserName] = useState<string>('')

  const [likes, setLikes] = useState([])
  const [registeredGroup, setRegisteredGroup] = useState([])

  const [needInfo, setNeedInfo] = useState<boolean>(false)

  const [ready, setReady] = useState<boolean>(false)

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
      Promise.allSettled([getUserInfo(), getLikesGroup(), getRegisteredGroup()]).then((res) => {
        if (res[0].status === 'fulfilled' && res[1].status === 'fulfilled' && res[2].status === 'fulfilled') {
          // 흐름 ⓼ 로 이동
          setReady(true)
        } else {
          console.error('error')
        }
      })
    }
  }, [response, router, needInfo])

  // ⑥ API 요청을 통해 얻은 정보를 state에 저장한 후, 로컬 스토리지에 저장
  useEffect(() => {
    if (likes.length) {
      localStorage.setItem('myLikes', JSON.stringify(likes))
    }
  }, [likes])

  // ⑦ API 요청을 통해 얻은 정보를 state에 저장한 후, 로컬 스토리지에 저장
  useEffect(() => {
    if (registeredGroup.length) {
      localStorage.setItem('registered', JSON.stringify(registeredGroup))
    }
  }, [registeredGroup])

  // ⓼ 모든 HTTP request가 settled된 상태에서 유저 정보가 없다면 ① 회원가입 페이지 있다면 ② 메인페이지로 이동
  useEffect(() => {
    if (ready) {
      if (needInfo) {
        // ① 회원 가입 페이지
        router.push('/sign_up/profile_start')
      } else {
        // ② 메인 페이지
        router.push('/home')
      }
    }
  }, [ready, needInfo, router])

  /* 토큰을 분해해서 response state에 저장하는 함수 */
  const splitToken = (token: any) => {
    if (token) {
      // 흐름 ② 로 이동
      setResponse(token.replace('access_token=', ''))
      localStorage.setItem('access_token', token.replace('access_token=', ''))
    } else {
      console.error('쿠키에 저장된 토큰이 없습니다')
      return false
    }
  }

  /* JWT 토큰을 디코딩(복호화)한다. */
  const parseJwt = (token: any) => {
    try {
      const base64Url = token.split('.')[1]
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )
      // ③ 흐름 3으로 이동
      return setTokenId(JSON.parse(jsonPayload))
    } catch (e) {
      return null
    }
  }

  /* 복호화된 토큰 중 userId 정보를 분리한다. */
  const checkId = (tokenId: any) => {
    // 객체를 순회할 때는 for in문을 사용한다.
    for (const key in tokenId) {
      if (key === 'sub') {
        // 흐름 ④ 로 이동
        setDecodedUserId(tokenId[key])
      }
      if (key === 'uname') {
        // 흐름 ④ 로 이동
        setDecodedUserName(tokenId[key])
      }
    }
  }
  /* 토큰을 바탕으로 유저 정보를 확인하는 함수 */
  const getUserInfo = useCallback(async () => {
    await axios.get('/api/v1/users/profile').then((res: any) => {
      if (res.data.status === null) {
        setNeedInfo(true)
      }
    })
  }, [])
  /* 토큰을 바탕으로 좋아요 한 게시글을 불러오는 함수 */
  const getLikesGroup = useCallback(async () => {
    try {
      await axios.get('/api/v1/users/likes').then((res) => {
        setLikes(res.data.likes)
      })
    } catch (err) {
      console.error(err)
    }
  }, [])
  /* 토큰을 바탕으로 가입된 게시글을 불러오는 함수 */
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
