import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta name="title" content="웰시코딩" />
          <meta name="description" content="함께 목적달성을 하기 위한 사람들을 매칭 시켜주는 플랫폼 입니다." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
