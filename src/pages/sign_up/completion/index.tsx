import Back from '../../../components/Common/Header/back'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'
import FootButton, { FootButtonType } from '../../../components/Common/FootButton'

const SignUpCompletion = () => {
  return (
    <>
      <Back />
      <div css={profileCompletion}>
        <h2>
          프로필을 모두
          <br /> 완성했어요~!
        </h2>
        <img src="/images/signup/character_com.svg" alt="프로필 완성 페이지 캐릭터" />
      </div>
      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          시작하기
        </FootButton>
      </div>
    </>
  )
}

export default SignUpCompletion

const profileCompletion = css`
  text-align: center;
  margin-top: 16vh;
  h2 {
    font-size: ${Common.fontSize.title};
    line-height: 31px;
  }
  img {
    margin-top: 4.2em;
  }
`

export const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;
`
