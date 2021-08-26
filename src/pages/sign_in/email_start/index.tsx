import TextField from 'components/Common/TextField'
import PasswordField from 'components/Common/PasswordField'
import BigTitle from 'components/Common/BigTitle'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
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

const loginFrom = css`
  margin-top: 1.7em;
  padding: 0 20px;
`

const loginTitleWrap = css`
  margin-top: 3.7em;
  padding: 0 20px;
`

const footButtonWrapper = css`
  margin-top: 68px;
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
