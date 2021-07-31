import React from 'react'
import { css } from '@emotion/react'
import Header from '../components/Header/back'
import Fnb from '../components/FooterMenu'
import { colors } from '../styles/colors'

function Home() {
  return (
    <>
      <Header />
      <div css={container}>
        <h1 css={colors.orange}>👋 mic-team Boilerplate</h1>
        <img css={bi} src="/images/common/mic_team.png" alt="mic team logo" />
      </div>
      <Fnb />
    </>
  )
}

export default Home

const container = css`
  margin-top: 15px;
  text-align: center;
`

const bi = css`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`
