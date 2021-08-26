import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'

const SignUpProfileUpload = () => {
  return (
    <>
      <Back />

      <Title title="프로필 사진을 올려주세요!" className="loginMt" />

      <input type="file" accept="image/*" />

      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP}>
          올리기 싫어요
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          등록하기
        </FootButton>
      </div>
    </>
  )
}

export default SignUpProfileUpload

const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`
