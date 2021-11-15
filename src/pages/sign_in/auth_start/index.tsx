import AuthLogin from 'src/components/AuthLogin'
import Back from 'src/components/Common/Header/Back'
import { css } from '@emotion/react'
import { Common } from 'src/styles/common'
import Head from 'next/head'

const AuthLoginStart = () => {
  return (
    <>
      <Head>
        <title>로그인 | wellseecoding</title>
        <meta name="description" content="로그인 페이지입니다." />
      </Head>
      <Back />

      <div css={authLoginTitleWrap}>
        <img src="/images/login/character_color.svg" alt="웰시코딩 로고" />

        <h1 css={bigTitle}>
          웰시와 함께
          <br /> 쉬운 스터디
        </h1>
      </div>

      <AuthLogin />
    </>
  )
}

export default AuthLoginStart

const authLoginTitleWrap = css`
  padding: 0 20px;

  img {
    padding-top: 5em;
  }
`
const bigTitle = css`
  font-size: ${Common.fontSize.bigTitle};
  font-weight: 500;
  color: ${Common.colors.black};
  margin-top: 27px;
  line-height: 52px;
`
