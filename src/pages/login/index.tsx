import Back from '../../components/Common/Header/back'
import Button from '../../components/Common/Button'
import PasswordField from '../../components/Common/PasswordField'
import { TextField } from '@material-ui/core'
import BigTitle from '../../components/Login/BigTitle'
import { css } from '@emotion/react'

const Login = () => {
  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <BigTitle title="이메일로 로그인" />
      </div>

      <div css={loginFrom}>
        <TextField label="이메일" type="email" />
        <PasswordField />
      </div>

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
