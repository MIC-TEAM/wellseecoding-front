import { css } from '@emotion/react'
import { Common } from 'src/styles/common'

interface Props {
  user: string | null
  num?: number
}
function HomeMain({ user, num }: Props) {
  return (
    <div css={homeMainWrap}>
      <img src="/images/home/dog.svg" alt="웰시코딩 캐릭터" />

      <div>
        <h1>
          안녕하세요 <strong>{user}님 👋</strong>
        </h1>
        <p>
          {num ? (
            <span>
              가입하신 스터디는
              <br />총 {num}개에요~
            </span>
          ) : (
            <span>
              아직 가입하신
              <br /> 스터디가 없어요.. 🥲
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default HomeMain

export const homeMainWrap = css`
  position: relative;
  background-color: white;
  display: flex;
  justify-content: center;

  img {
    z-index: 10;
    position: absolute;
    left: 5%;
    clip: rect(0px, 220px, 100px, 0px);
  }
  div {
    margin-top: 1em;
    margin-left: 1em;
    @media (max-width: 420px) {
      margin-left: 12em;
    }
    h1 {
      font-weight: 500;
      font-size: ${Common.fontSize.fs18};
      line-height: 26px;
      color: #262626;
      letter-spacing: -0.6px;
      @media (max-width: 420px) {
        font-size: ${Common.fontSize.fs16};
      }
    }
    p {
      font-weight: 500;
      font-size: ${Common.fontSize.title};
      line-height: 32px;
      letter-spacing: -1px;
      color: #262626;
      @media (max-width: 420px) {
        font-size: ${Common.fontSize.fs16};
      }
    }
  }
`
