import React from 'react'
import { css } from '@emotion/react'
import FooterMenu from 'components/Common/FooterMenu'
import { Common } from 'styles/common'
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
  h1 {
    font-size: ${Common.fontSize.fs22};
  }
`
