import Back from '../../../components/Common/Header/back'
import Button from '../../../components/Common/Button'
import PasswordField from '../../../components/Common/PasswordField'
import Title from '../../../components/Common/Title'
import { css } from '@emotion/react'

const Login = () => {
  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <Title title="비밀번호 재설정해주세요!" />
      </div>

      <form css={loginFrom}>
        <PasswordField title="비밀번호" />
        <PasswordField title="비밀번호 확인" />
      </form>

      <Button firstText="다음" className="oneBtn" secondText="" />
    </>
  )
}

export default Login

const loginFrom = css`
  margin-top: 1.7em;
`

const loginTitleWrap = css`
  margin-top: 3.7em;
`
