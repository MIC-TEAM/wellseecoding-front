import Back from 'src/components/Common/Header/Back'
import { TextField } from '@material-ui/core'
import FootButton, { FootButtonType } from 'src/components/Common/FootButton'
import Title from 'src/components/Common/Title'
import { css } from '@emotion/react'

const PasswordEmailSubmit = () => {
  return (
    <>
      <Back />

      <Title title="비밀번호 재설정" className="loginMt" />

      <form css={passwordResetForm}>
        <TextField label="이름" type="text" />
        <TextField label="이메일" type="email" />
        <TextField label="인증번호" type="number" />

        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.DISABLE}>
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default PasswordEmailSubmit

const passwordResetForm = css`
  margin-top: 1.7em;
  padding: 0 20px;
`

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;
`
