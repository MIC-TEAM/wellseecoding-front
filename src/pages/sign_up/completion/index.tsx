import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import { profileCompletion, footButtonWrapper } from './style'

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
