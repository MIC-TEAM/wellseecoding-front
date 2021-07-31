import React from 'react'
import { css } from '@emotion/react'
import Header from '../components/Header/back'
import Fnb from '../components/Fnb'

function Home() {
  return (
    <>
      <Header />
      <div css={container}>
        <h1>👋 mic-team Boilerplate</h1>
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

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`

const bi = css`
  display: inline-block;
  margin-top: 10px;
  width: 100px;
  border-radius: 5px;
`
