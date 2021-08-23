import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import { profileStart, footButtonWrapper } from './style'

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
