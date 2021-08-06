import Button from '../../../components/Common/Button'
import Back from '../../../components/Common/Header/back'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

const Login = () => {
  return (
    <>
      <Back />
      <div css={profileStart}>
        <h2>자, 이제 프로필을 만들어봐요~!</h2>
        <img src="/images/login/character.svg" alt="프로필" />
      </div>
      <Button firstText="아 귀찮아요. 나중에 할래요." secondText="다음" className1="whiteBtn" />
    </>
  )
}

export default Login

const profileStart = css`
  text-align: center;
  margin-top: 14em;
  h2 {
    font-size: ${Common.fontSize.title};
  }
  img {
    margin-top: 7.2em;
  }
`
