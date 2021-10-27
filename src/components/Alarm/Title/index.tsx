import React, { useState, useCallback, useEffect } from 'react'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import MoreModal from 'components/Modal'
import ReadModal from 'components/RegisterModal'
import { useDispatch } from 'react-redux'
import { READ_ALL_NOTIS_REQUEST } from 'reducers/notifications'

type Props = {
  num: number
}
const AlarmTitle = ({ num }: Props) => {
  /*삭제 모달*/
  const [deleteModalShowing, setDeleteModalShowing] = useState(false)
  const [readModalShowing, setReadModalShowing] = useState(false)
  /* 가입 여부 파악 결과값 */
  const [confirmResult, setConfirmResult] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (confirmResult) {
      setReadModalShowing(false)
      setConfirmResult(false)
      readAll()
    }
  }, [confirmResult])

  useEffect(() => {
    if (deleteModalShowing) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [deleteModalShowing])

  const readAll = useCallback(() => {
    dispatch({
      type: READ_ALL_NOTIS_REQUEST,
    })
  }, [dispatch])

  const toggleReadModal = useCallback(() => {
    setReadModalShowing(true)
  }, [])

  const toggleDeleteModal = useCallback(() => {
    setDeleteModalShowing((prevState) => !prevState)
    document.body.style.overflow = 'hidden'
  }, [])

  return (
    <section css={alarmTitWrap}>
      <h1>알림</h1>
      <div className="desc">
        <p>
          <strong>{num}</strong>개의 읽지 않은 알림이 있습니다.
        </p>

        <div>
          <button type="button" onClick={toggleReadModal}>
            전체 읽음
          </button>
          <button type="button" onClick={toggleDeleteModal} className="allDelete">
            전체 삭제
          </button>
        </div>
      </div>

      {readModalShowing && (
        <ReadModal onClose={() => setReadModalShowing(false)} confirmResult={() => setConfirmResult(true)} />
      )}
      {deleteModalShowing && <MoreModal onClose={toggleDeleteModal} />}
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
