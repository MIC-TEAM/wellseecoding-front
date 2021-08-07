import Back from '../../../components/Common/Header/back'
import FootButton from '../../../components/Common/FootButton'
import PasswordField from '../../../components/Common/PasswordField'
import Title from '../../../components/Common/Title'
import { css } from '@emotion/react'

const PasswordReset = () => {
  return (
    <>
      <Back />

      <div css={passwordResetTitle}>
        <Title title="비밀번호 재설정해주세요!" />
      </div>

      <form css={passwordForm}>
        <PasswordField title="비밀번호" />
        <PasswordField title="비밀번호 확인" />
      </form>

      <FootButton firstText="다음" className="oneBtn" secondText="" />
    </>
  )
}

export default PasswordReset

const passwordForm = css`
  margin-top: 1.7em;
`

const passwordResetTitle = css`
  margin-top: 3.7em;
`
