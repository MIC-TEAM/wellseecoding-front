import Back from '../../../components/Common/Header/back'
import { TextField } from '@material-ui/core'
import Button from '../../../components/Common/Button'
import Title from '../../../components/Common/Title'
import { css } from '@emotion/react'

const PasswordEmailSubmit = () => {
  return (
    <>
      <Back />

      <div css={passwordResetTitle}>
        <Title title="비밀번호 재설정" />
      </div>

      <form css={passwordResetForm}>
        <TextField label="이름" type="text" />
        <TextField label="이메일" type="email" />
        <TextField label="인증번호" type="number" />
      </form>

      <Button firstText="다음" className="oneBtn" secondText="" />
    </>
  )
}

export default PasswordEmailSubmit

const passwordResetForm = css`
  margin-top: 1.7em;
`

const passwordResetTitle = css`
  margin-top: 3.7em;
`
