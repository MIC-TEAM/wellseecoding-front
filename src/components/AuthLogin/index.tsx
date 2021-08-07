import React from 'react'
import { css } from '@emotion/react'
import { Common } from '../../styles/common'
import Link from 'next/link'

export default function AuthLogin() {
  return (
    <div css={authLoginButton}>
      <button type="button" className="kakao">
        <img src="/images/login/kakao.svg" alt="카카오 로그인" />
        카카오톡으로 시작하기
      </button>
      <button type="button" className="naver">
        <img src="/images/login/naver.svg" alt="네이버 로그인" />
        네이버로 시작하기
      </button>
      <button type="button" className="email">
        <img src="/images/login/email.svg" alt="이메일로 로그인" />
        이메일로 시작하기
      </button>

      <p css={passwordFind}>
        웰시가 처음이신가요?
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </p>
    </div>
  )
}

const authLoginButton = css`
  width: 100%;
  display: block;
  margin-top: 11em;
  button {
    margin-top: 9px;
    width: 100%;
    border-radius: 16px;
    padding: 16px 0;
    font-weight: 500;
    color: #ffffff;
    font-size: ${Common.fontSize.fs18};
    position: relative;
    img {
      position: absolute;
      left: 21px;
      top: 50%;
      transform: translateY(-50%);
    }
    &.kakao {
      background: #fee500;
      color: #262626;
    }
    &.naver {
      background: #03c75a;
    }
    &.email {
      background: #ff6e35;
    }
  }
`

const passwordFind = css`
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  margin-top: 26px;
  color: #8f8c8b;
  a {
    margin-left: 4px;
    color: #ff6e35;
    font-weight: 500;
    text-decoration-line: underline;
  }
`
