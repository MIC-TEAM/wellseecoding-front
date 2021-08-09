import TextField from '../../../components/Common/TextField'
import Back from '../../../components/Common/Header/back'
import PasswordField from '../../../components/Common/PasswordField'
import BigTitle from '../../../components/Common/BigTitle'
import { loginTitleWrap, loginFrom, loginButton, passwordFind } from './styled'
import Link from 'next/link'

const EmailLogin = () => {
  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <BigTitle title="이메일로 로그인" />
      </div>

      <form css={loginFrom}>
        <TextField text="이메일" type="email" />
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

export default EmailLogin
