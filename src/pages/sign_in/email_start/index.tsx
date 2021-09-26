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
// import { REGISTER_USERS_URL } from 'apis'
// import axios from 'axios'

const EmailLogin = () => {
  const router = useRouter()

  // 이메일, 비밀번호
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [passwordMessage, setPasswordMessage] = useState<string>('')

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push('/home')
      // try {
      //   await axios
      //     .post(REGISTER_USERS_URL, {
      //       password: password,
      //       email: email,
      //     })
      //     .then((res) => {
      //       console.log(res.data)
      //     })
      // } catch (err) {
      //   console.error(err)
      // }
    },
    [email, password]
  )

  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage('이메일 형식이 틀렸어요! 다시 확인해주세요 ㅜ ㅜ')
      setIsEmail(false)
    } else {
      setEmailMessage('올바른 이메일 형식이에요 : )')
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
      setIsPassword(false)
    } else {
      setPasswordMessage('안전한 비밀번호에요 : )')
      setIsPassword(true)
    }
  }, [])

  return (
    <>
      <Back />

      <div css={loginTitleWrap}>
        <BigTitle title="이메일로 로그인" />
      </div>

      <form css={loginFrom} onSubmit={onSubmit}>
        <div className="formbox">
          <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
        </div>

        <div className="formbox">
          <PasswordField
            onChange={onChangePassword}
            passwordText="비밀번호 (숫자+영문자+특수문자 조합으로 8자리 이상)"
            title="비밀번호"
            typeTitle="password"
          />
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
        </div>
        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} disabled={!(isEmail && isPassword)}>
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
  .formbox {
    position: relative;
    margin-bottom: 20px;
    .message {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 24px;
      letter-spacing: -1px;
      position: absolute;
      bottom: -10px;
      left: 0;
      &.success {
        color: #8f8c8b;
      }
      &.error {
        color: #ff2727;
      }
    }
  }
`

const loginTitleWrap = css`
  margin-top: 3.7em;
  padding: 0 20px;
`

const footButtonWrapper = css`
  margin-top: 68px;
  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
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
