import { css } from '@emotion/react'
import FooterMenu from 'components/Common/FooterMenu'
import SplashScreen from 'components/SplashScreen'
import { useEffect, useState } from 'react'

function Home() {
  const [tokenId, setTokenId] = useState(null)
  const [decodedUserId, setDecodedUserId] = useState(null)

  // 1차적으로 복호화했을 때 아직 이름이 없어서, 해당 정보를 어떻게 저장할 지는 협의해봐야 할 것 같네요

  // ① 환경 변수에 등록한 토큰을 디코딩
  useEffect(() => {
    parseJwt(process.env.NEXT_PUBLIC_TOKEN)
  }, [])

  // ② 객체에 담긴 복호화된 token 정보 중 userId를 추출
  useEffect(() => {
    if (tokenId) checkId(tokenId)
  }, [tokenId])

  // ③ 마지막 복호화된 토큰의 userId 확인
  useEffect(() => {
    if (decodedUserId) console.log('decodedUserId: ', decodedUserId)
  }, [decodedUserId])

  /* JWT 토큰을 디코딩(복호화)한다. */
  const parseJwt = (token: any) => {
    try {
      console.log('start!', JSON.parse(atob(token.split('.')[1])))
      setTokenId(JSON.parse(atob(token.split('.')[1])))
    } catch (e) {
      return null
    }
  }
  /* 복호화된 토큰 중 userId 정보를 분리한다. */
  const checkId = (tokenId: any) => {
    // 객체를 순회할 때는 for in문을 사용한다.
    for (const key in tokenId) {
      // console.log(key, tokenId[key])
      if (key === 'sub') {
        // console.log('tokenId의 키:', tokenId[key])
        setDecodedUserId(tokenId[key])
      }
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
