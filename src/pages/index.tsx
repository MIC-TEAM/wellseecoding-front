import { css } from '@emotion/react'
import axios from 'axios'
import FooterMenu from 'components/Common/FooterMenu'
import SplashScreen from 'components/SplashScreen'
import { useEffect } from 'react'

import Head from 'next/head'

function Home() {
  // 1차적으로 복호화했을 때 아직 이름이 없어서, 해당 정보를 어떻게 저장할 지는 협의해봐야 할 것 같네요
  // ① 환경 변수에 등록한 토큰을 디코딩
  useEffect(() => {
    if (typeof window !== undefined) {
      if (localStorage.getItem('access_token')?.length) {
        axios.defaults.headers.common = {
          Authorization: `Bearer ` + localStorage.getItem('access_token'),
        }
      } else {
        setTimeout(() => {
          checkDecode()
        }, 2000)
      }
    }
  }, [])

  /* 복호화된 토큰 정보가 없을 경우 회원가입 단으로 이동 */
  function checkDecode() {
    if (!localStorage.getItem('id')) {
      alert('회원정보가 없으므로 회원가입 페이지로 이동합니다!')
      location.href = '/sign_in/auth_start'
    }
  }

  return (
    <>
      <Head>
        <title>웰시코딩 | wellseecoding</title>
        <meta name="description" content="홈, 메인 화면입니다" />
      </Head>
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
