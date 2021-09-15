import { css } from '@emotion/react'
import FooterMenu from 'components/Common/FooterMenu'
import SplashScreen from 'components/SplashScreen'
import { useEffect, useState } from 'react'

function Home() {
  const [tokenId, setTokenId] = useState()

  useEffect(() => {
    parseJwt(process.env.NEXT_PUBLIC_TOKEN)
  }, [])

  useEffect(() => {
    console.log('tokenId:', tokenId)
  }, [tokenId])

  const parseJwt = (token: any) => {
    try {
      // console.log(JSON.parse(atob(token.split('.')[1])))
      setTokenId(JSON.parse(atob(token.split('.')[1])))
    } catch (e) {
      return null
    }
  }
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
