import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import PasswordField from 'components/Common/PasswordField'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'

const PasswordReset = () => {
  return (
    <>
      <Back />

      <Title title="비밀번호 재설정해주세요!" className="loginMt" />

      <form css={passwordForm}>
        <PasswordField title="비밀번호" />
        <PasswordField title="비밀번호 확인" />

        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.DISABLE}>
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
`

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;
`
