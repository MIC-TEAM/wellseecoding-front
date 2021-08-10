import AuthLogin from 'components/AuthLogin'
import Back from 'components/Common/Header/Back'
import { authLoginTitleWrap, bigTitle } from './style'

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
