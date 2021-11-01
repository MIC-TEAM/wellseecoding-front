import AuthLogin from 'components/AuthLogin'
import Back from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import { Common } from 'styles/common'

const AuthLoginStart = () => {
  return (
    <>
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
