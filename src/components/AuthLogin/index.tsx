/* eslint-disable no-var */
import React from 'react'
import Link from 'next/link'

import { authLoginButton, email, kakaoStyle, naverStyle } from './styled'
import { passwordFind } from 'pages/sign_in/email_start/style'

export default function AuthLogin() {
  const kakaoLogin = () => (location.href = 'https://wellseecoding.com/oauth2/authorization/kakao')

  const naverLogin = () => (location.href = 'https://wellseecoding.com/oauth2/authorization/naver')

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
