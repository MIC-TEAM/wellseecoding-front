import Back from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import FootButton, { FootButtonType } from 'components/Common/FootButton'

const SignUpProfileStart = () => {
  return (
    <>
      <Back />
      <div css={profileStart}>
        <h2>
          자, 이제 프로필을
          <br /> 만들어봐요~!
        </h2>
        <img src="/images/signup/character.svg" alt="프로필 시작 페이지 캐릭터" />
      </div>
      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP}>
          아 귀찮아요. 나중에 할래요
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          네~
        </FootButton>
      </div>
    </>
  )
}

export default SignUpProfileStart

const profileStart = css`
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

const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 12px;
  }
`
