import { css } from '@emotion/react'
import FooterMenu from 'components/Common/FooterMenu'
import SplashScreen from 'components/SplashScreen'

function Home() {
  return (
    <>
      <div css={container}>
        <SplashScreen />
      </div>
      <FooterMenu />
    </>
  )
}

export default Home

const container = css`
  width: 100%;
  height: 100%;
  background: #ff6e35;
`
