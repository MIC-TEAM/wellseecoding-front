import type { AppProps } from 'next/app'
import wrapper from 'store'
import { GlobalStyles } from 'styles/global-styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(App)
