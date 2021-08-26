import { css } from '@emotion/react'
import { Common } from 'styles/common'

type Props = {
  num: number
}
const AlarmTitle = ({ num }: Props) => {
  return (
    <section css={alarmTitWrap}>
      <h1>알림</h1>
      <div className="desc">
        <p>
          <strong>{num}</strong>개의 읽지 않은 알림이 있습니다.
        </p>

        <div>
          <button type="button">전체 읽음</button>
          <button type="button">전체 삭제</button>
        </div>
      </div>
    </section>
  )
}

export default AlarmTitle

const alarmTitWrap = css`
  padding: 0 20px 22px;
  margin-top: 1.2em;
  h1 {
    font-weight: 500;
    font-size: ${Common.fontSize.title};
    line-height: 36px;
    letter-spacing: -1px;
    color: #222222;
  }
  button {
    &:nth-of-type(1) {
      margin-right: 1.6em;
    }
  }
  .desc {
    font-weight: 500;
    font-size: ${Common.fontSize.fs14};
    line-height: 17px;
    letter-spacing: -0.4px;
    display: flex;
    justify-content: space-between;
    margin-top: 0.4em;
    p {
      color: #262626;
      strong {
        color: #ff6e35;
      }
    }
  }
`
