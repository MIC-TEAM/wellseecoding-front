import Back from '../../../components/Common/Header/back'
import PasswordField from '../../../components/Common/PasswordField'
import { TextField } from '@material-ui/core'
import BigTitle from '../../../components/Common/BigTitle'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'
import Link from 'next/link'

const Login = () => {
  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <BigTitle title="이메일로 로그인" />
      </div>

      <form css={loginFrom}>
        <TextField label="이메일" type="email" />
        <PasswordField title="비밀번호" />
      </form>

      <button type="button" css={loginButton}>
        다음
      </button>

      <p css={passwordFind}>
        기억이 안나세요?
        <Link href="/login/password_email">
          <a>비밀번호 찾기</a>
        </Link>
      </p>
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

const loginButton = css`
  margin-top: 48px;
  width: 100%;
  border-radius: 16px;
  padding: 16px 0;
  color: #ffffff;
  background: ${Common.colors.gray04};
  font-size: ${Common.fontSize.fs18};
  &.orangeBtn {
    background: ${Common.colors.orange};
  }
`

const passwordFind = css`
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  margin-top: 26px;
  color: #8f8c8b;
  a {
    font-weight: 500;
    margin-left: 4px;
    color: #ff6e35;
    text-decoration-line: underline;
  }
`
