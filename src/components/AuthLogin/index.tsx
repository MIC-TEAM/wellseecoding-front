/* eslint-disable no-var */
import React from 'react'
import Link from 'next/link'

import { authLoginButton, email, kakaoStyle, naverStyle } from './styled'
import { passwordFind } from 'pages/sign_in/email_start/style'

declare global {
  interface Window {
    Kakao: any
    naver: any
  }
}

export const KAKAO_CALLBACK = 'http://localhost:3000/sign_in/auth_start'

export default function AuthLogin() {
  if (typeof window !== 'undefined') {
    // 코드 작성
    var { Kakao } = window
  }

  const kakaoLogin = () => {
    Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`)

    // process.env.NEXT_PUBLIC_PUBLISHABLE_KEY
    Kakao.Auth.login({
      scope: 'profile_nickname,  account_email',

      success: function (authObj: any) {
        console.log('authObj: ', authObj)
        // Kakao.Auth.setAccessToken(authObj.access_token)
        // localStorage.setItem('token', authObj.access_token);
        if (authObj.access_token) {
          Kakao.cleanup()
          console.log('Kakao.cleanup!-login')
        }
      },
      fail: function (err: Error) {
        console.log('에러', err)
        alert('로그인실패!')
        return
      },
    })
  }

  /* 
  https://developers.naver.com/docs/login/web/web.md 1.2 네이버 아이디로 로그인 인증 요청문 생성
  https://nid.naver.com/oauth2.0/authorize?client_id={클라이언트 아이디}&response_type=code&redirect_uri={개발자 센터에 등록한 콜백 URL(URL 인코딩)}&state={상태 토큰}
  */

  const naverLogin = () => {
    var url =
      'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
      process.env.NEXT_PUBLIC_NAVER_KEY +
      '&redirect_uri=' +
      KAKAO_CALLBACK +
      '&state=1234'
    window.location.replace(url)
  }

  return (
    <div css={authLoginButton}>
      <button type="button" css={kakaoStyle} onClick={kakaoLogin}>
        <img src="/images/login/kakao.svg" alt="카카오 로그인" />
        카카오톡으로 시작하기
      </button>
      <button type="button" css={naverStyle} onClick={naverLogin}>
        <img src="/images/login/naver.svg" alt="네이버 로그인" />
        네이버로 시작하기
      </button>
      <button type="button" css={email}>
        <img src="/images/login/email.svg" alt="이메일로 로그인" />
        이메일로 시작하기
      </button>
      <p css={passwordFind}>
        웰시가 처음이신가요?
        <Link href="/sign_up">
          <a>회원가입</a>
        </Link>
      </p>
    </div>
  )
}