import Back from '../../../components/Common/Header/back'
import FootButton from '../../../components/Common/FootButton'
import PasswordField from '../../../components/Common/PasswordField'
import Title from '../../../components/Common/Title'
import { passwordForm } from './style'

const PasswordReset = () => {
  return (
    <>
      <Back />

      <Title title="비밀번호 재설정해주세요!" className="loginMt" />

      <form css={passwordForm}>
        <PasswordField title="비밀번호" />
        <PasswordField title="비밀번호 확인" />
      </form>

      <FootButton firstText="다음" className="oneBtn" secondText="" />
    </>
  )
}

export default PasswordReset
