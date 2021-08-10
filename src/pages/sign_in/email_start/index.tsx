import TextField from 'components/Common/TextField'
import PasswordField from 'components/Common/PasswordField'
import BigTitle from 'components/Common/BigTitle'
import { loginTitleWrap, loginFrom, passwordFind, footButtonWrapper } from './style'
import Link from 'next/link'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'

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

        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.DISABLE}>
            다음
          </FootButton>
        </div>
      </form>

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
