import { css } from '@emotion/react'
import type { AppProps } from 'next/app'
import wrapper from 'store'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global-styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        <script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charSet="utf-8"
        ></script>
      </Head>
      {GlobalStyles}
      <div css={mainWrap}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default wrapper.withRedux(App)

const mainWrap = css`
  padding: 0 20px;
  height: 100vh;
  width: 100%;
  /* overflow: scroll; */
`
