import Back from '../../../components/Common/Header/back'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

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
      {/* <FootButton
        firstText="아 귀찮아요. 나중에 할래요."
        secondText="네~"
        className1="whiteBtn"
        className2="orangeBtn"
      /> */}
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
