import { css } from '@emotion/react'
import type { AppProps } from 'next/app'
import wrapper from 'src/store'
import Head from 'next/head'
import { GlobalStyles } from 'src/styles/global-styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/images/icon/dog.svg" />
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
  height: 100%;
  width: 100%;
  overflow-y: auto;
`
