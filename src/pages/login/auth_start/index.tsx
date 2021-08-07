import Back from '../../../components/Common/Header/back'
import AuthLoginButton from '../../../components/AuthLogin'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

const AuthLogin = () => {
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

      <AuthLoginButton />
    </>
  )
}

export default AuthLogin

const authLoginTitleWrap = css`
  margin-top: 11em;
`
const bigTitle = css`
  font-size: ${Common.fontSize.bigTitle};
  font-weight: 500;
  color: ${Common.colors.black};
  margin-top: 27px;
  line-height: 52px;
`
