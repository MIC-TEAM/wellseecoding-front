import React from 'react'
import Link from 'next/link'

import { authLoginButton, email, kakao, naver } from './styled'
import { passwordFind } from 'pages/sign_in/email_start/style'
import { useCallback } from 'react'

export default function AuthLogin() {
  const KAKAO_CALLBACK_URL = 'localhost://????'
  const NAVER_CALLBACK_URL = 'localhost://????'

  const kakaoLogin = useCallback(() => {
    location.href = `${KAKAO_CALLBACK_URL}`
  }, [])

  const naverLogin = useCallback(() => {
    location.href = `${NAVER_CALLBACK_URL}`
  }, [])

  return (
    <div css={authLoginButton}>
      <button type="button" css={kakao} onClick={kakaoLogin}>
        <img src="/images/login/kakao.svg" alt="카카오 로그인" />
        카카오톡으로 시작하기
      </button>
      <button type="button" css={naver} onClick={naverLogin}>
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
