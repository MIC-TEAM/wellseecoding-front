import type { AppProps } from 'next/app'
import { GlobalStyles } from '../utils/global-styles'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <Component {...pageProps} />
    </>
  )
}

export default App
