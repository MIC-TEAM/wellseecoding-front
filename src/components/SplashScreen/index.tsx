import { css } from '@emotion/react'
import Emo from 'public/images/splashScreen/logo01.svg'
import Dog from 'public/images/splashScreen/dog.svg'

function SplashScreen() {
  return (
    <main css={screen}>
      <section>
        <div className="top">
          <Emo alt="이모티콘" />
          <h1>
            웰시와 함께 <br /> 쉬운 코딩
          </h1>
        </div>

        <div className="dog">
          <Dog alt="강아지 아이콘" />
        </div>
      </section>
    </main>
  )
}

export default SplashScreen

const screen = css`
  position: relative;
  section {
    padding: 0 20px;
  }
  .top {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 9rem;
    left: 4rem;
  }
  h1 {
    font-weight: 500;
    font-size: 4rem;
    line-height: 52px;
    letter-spacing: -1px;
    color: #ffffff;
    text-align: left;
    margin-top: 1em;
  }
  .dog {
    position: absolute;
    top: 50vh;
    right: 5vw;
  }
`
