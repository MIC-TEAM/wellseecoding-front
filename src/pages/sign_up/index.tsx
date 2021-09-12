import React, { useState } from 'react'
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
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  console.log(name, email, password, passwordConfirm)

  //유효성 검사
  // const [isValid, setIsValid] = useState<boolean>(false)

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<string>('')
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [passwordMessage, setPasswordMessage] = useState<string>('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')

  // 유효성 검사 마친 상태들
  const [isName, setIsName] = useState<boolean>(false)
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)

  console.log(emailMessage)

  const onSubmit = () => {
    console.log('onSubmit')
  }

  // 이름
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameCurrent = e.target.value
    setName(nameCurrent)

    if (nameCurrent.length < 2 || nameCurrent.length > 5) {
      setNameMessage('2글자 이상 5글자 미만으로 입력해주세요.')
      setIsName(false)
    } else {
      setNameMessage('올바른 이름 형식입니다 :)')
      setIsName(true)
    }

    console.log(nameCurrent)
  }

  // 이메일
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  }

  // 비밀번호
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    console.log('onChangePassword')
  }

  // 비밀번호 확인
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmCurrent = e.target.value
    setPasswordConfirm(passwordConfirmCurrent)

    if (password === passwordConfirmCurrent) {
      setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
      setIsPasswordConfirm(true)
    } else {
      setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
      setIsPasswordConfirm(false)
    }

    console.log('onChangePasswordConfirm')
  }

  return (
    <>
      <Back />

      <Title title="회원가입" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <div className="formbox">
          <TextField text="이름" type="text" typeName="name" onChange={onChangeName} />
          {name.length > 0 && <span className={`message ${isName ? 'success' : 'error'}`}>{nameMessage}</span>}
        </div>

        <div className="formbox">
          <TextField text="이메일" type="email" typeName="email" onChange={onChangeEmail} />
          {email.length > 0 && <span className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</span>}
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
          {password.length > 0 && (
            <span className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</span>
          )}
        </div>

        {/* 비밀번호 재확인 입력창 
        (조건) 처음에 입력했던 비밀번호와 === 같아야한다.
        */}
        <div className="formbox">
          <PasswordField
            onChange={onChangePasswordConfirm}
            passwordText=" "
            title="비밀번호 확인"
            typeTitle="passwordConfirm"
          />
          {passwordConfirm.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
          )}
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
