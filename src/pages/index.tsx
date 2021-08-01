import React from 'react'
import { css } from '@emotion/react'
import HeaderBack from '../components/Common/Header/Back'
import FooterMenu from '../components/Common/FooterMenu'
import { Common } from '../styles/common'
function Home() {
  return (
    <>
      <HeaderBack />
      <div css={container}>
        <h1>👋 mic-team Boilerplate</h1>
        <img css={bi} src="/images/common/mic_team.png" alt="mic team logo" />
      </div>
      <FooterMenu />
    </>
  )
}

export default Home

const container = css`
  margin-top: 15px;
  text-align: center;
  h1 {
    font-size: ${Common.fontSize.fs22};
  }
`

const bi = css`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`
