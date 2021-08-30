import React, { useState, useCallback } from 'react'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import Modal from 'components/Modal'

type Props = {
  num: number
}
const AlarmTitle = ({ num }: Props) => {
  const [isShowing, setIsShowing] = useState(false)

  const toggleModal = useCallback(() => {
    setIsShowing((prevState) => !prevState)
  }, [])
  return (
    <section css={alarmTitWrap}>
      <h1>알림</h1>
      <div className="desc">
        <p>
          <strong>{num}</strong>개의 읽지 않은 알림이 있습니다.
        </p>

        <div>
          <button type="button">전체 읽음</button>
          <button type="button" onClick={toggleModal} className="allDelete">
            전체 삭제
          </button>
        </div>
      </div>

      {isShowing && <Modal onClose={toggleModal} />}
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
  .allDelete {
    margin-left: 1.6em;
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