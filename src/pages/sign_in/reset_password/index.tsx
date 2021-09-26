import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import PasswordField from 'components/Common/PasswordField'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { REGISTER_USERS_URL } from 'apis'
import { useRouter } from 'next/router'
import axios from 'axios'
import React, { useCallback, useState } from 'react'

interface PasswordReset {
  password: string
}

const PasswordReset = () => {
  const router = useRouter()
  //비밀번호, 비밀번호 확인
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')

  //오류메시지 상태저장
  const [passwordMessage, setPasswordMessage] = useState<string>('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')

  // 유효성 검사
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/home')
    try {
      await axios
        .post(REGISTER_USERS_URL, {
          password: password,
        })
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
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

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 : )')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('비밀번호가 틀려요. 다시 확인해주세요 ㅜ ㅜ')
        setIsPasswordConfirm(false)
      }
    },
    [password]
  )

  return (
    <>
      <Back />

      <Title title="비밀번호 재설정해주세요!" className="loginMt" />

      <form css={passwordForm} onSubmit={onSubmit}>
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
          <FootButton
            type="submit"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!(isPassword && isPasswordConfirm)}
          >
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default PasswordReset

const passwordForm = css`
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

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
  }
`
