import { css } from '@emotion/react'

function SplashScreen() {
  return (
    <main css={screen}>
      <section>
        <div className="top">
          <img src="/images/splashScreen/logo01.svg" alt="" />
          <h1>
            웰시와 함께 <br /> 쉬운 코딩
          </h1>
        </div>

        <div className="dog">
          <img src="/images/splashScreen/dog.svg" alt="" />
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
    top: 10vh;
    left: 5vw;
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
