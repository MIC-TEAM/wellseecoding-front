import { css } from '@emotion/react'
import type { AppProps } from 'next/app'
import wrapper from 'store'
import { GlobalStyles } from 'styles/global-styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
`
