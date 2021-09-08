import React, { useState, useCallback } from 'react'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextField from 'components/Common/TextField'
import PasswordField from 'components/Common/PasswordField'
import { css } from '@emotion/react'

interface SingUp {
  password: string
  name: string
  email?: string
}

const SingUp = () => {
  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  const [name, setName] = useState('')
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }, [])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }, [])

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
    },
    [password]
  )

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    console.log(email, name)
  }, [password, passwordCheck])

  return (
    <>
      <Back />

      <Title title="회원가입" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <div className="formbox">
          <TextField text="이름" type="text" typeName="name" onChange={onChangeName} />
          {passwordError && <span>비밀번호</span>}
        </div>

        <div className="formbox">
          <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
          {passwordError && <span>비밀번호</span>}
        </div>

        {/* 비밀번호 입력창
        (조건) 8글자 이상에 12글자 이하에 특수문자가 포함되어야 한다.
        */}
        <div className="formbox">
          <PasswordField
            onChange={onChangePassword}
            passwordText="비밀번호 (특수문자 포함 8자 이상)"
            title="비밀번호"
            typeTitle="password"
          />
          {passwordError && <span>비밀번호</span>}
        </div>

        {/* 비밀번호 재확인 입력창 
        (조건) 처음에 입력했던 비밀번호와 === 같아야한다.
        */}
        <div className="formbox">
          <PasswordField
            onChange={onChangePasswordCheck}
            passwordText=" "
            title="비밀번호 확인"
            typeTitle="password_confirm"
          />
          {passwordError && <span>비밀번호</span>}
        </div>

        <div css={footButtonWrapper}>
          <section>
            <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION}>
              다음
            </FootButton>
          </section>
        </div>
      </form>
    </>
  )
}

export default SingUp

const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  section {
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const selfWrap = css`
  margin-top: 1.7em;
  padding: 0 20px;
  .formbox {
    position: relative;
    margin-bottom: 20px;
    .error {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 24px;
      letter-spacing: -1px;
      color: #ff2727;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
`
