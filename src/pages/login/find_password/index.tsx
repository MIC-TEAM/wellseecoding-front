import Back from '../../../components/Common/Header/back'
import { TextField } from '@material-ui/core'
import FootButton, { FootButtonType } from '../../../components/Common/FootButton'
import Title from '../../../components/Common/Title'
import { footButtonWrapper, passwordResetForm } from './style'

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
          <FootButton buttonType={FootButtonType.DISABLE}>다음</FootButton>
        </div>
      </form>
    </>
  )
}

export default PasswordEmailSubmit
