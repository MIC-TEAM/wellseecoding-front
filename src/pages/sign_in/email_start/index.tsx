import TextField from 'src/components/Common/TextField'
import React, { useCallback, useState } from 'react'
import PasswordField from 'src/components/Common/PasswordField'
import BigTitle from 'src/components/Common/BigTitle'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import FootButton, { FootButtonType } from 'src/components/Common/FootButton'
import Back from 'src/components/Common/Header/Back'
import axios from 'axios'

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

      try {
        await axios
          .post('/api/v1/users/token', {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.status === 200) {
              router.push('/token')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [password, email, router]
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

      <main css={loginAlign}>
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
      </main>
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
  padding: 0 20px;
`

const loginAlign = css`
  padding-top: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 90%;
`

const footButtonWrapper = css`
  margin-top: 68px;
  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
  }
`
