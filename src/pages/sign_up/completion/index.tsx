import Back from '../../../components/Common/Header/back'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

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
      {/* <FootButton firstText="시작하기" secondText="" className1="orangeBtn" className="oneBtn" /> */}
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
