import TextField from 'components/Common/TextField'
import React, { useCallback, useState } from 'react'
import PasswordField from 'components/Common/PasswordField'
import BigTitle from 'components/Common/BigTitle'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'

const EmailLogin = () => {
  const router = useRouter()

  // 이메일, 비밀번호
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(`이메일 + ${email}, 패스워드 + ${password}`)
      router.push('/home')
    },
    [email, password]
  )

  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailCurrent = e.target.value
    setEmail(emailCurrent)
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      alert('비밀번호는 숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요.')
    } else {
      alert('비밀번호는 숫자 + 영문자 + 특수문자 조합으로 8자리 이상 입력해주세요.')
    }
  }, [])

  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <BigTitle title="이메일로 로그인" />
      </div>

      <form css={loginFrom} onSubmit={onSubmit}>
        <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
        <PasswordField
          title="비밀번호"
          onChange={onChangePassword}
          typeTitle="password"
          passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
        />

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
