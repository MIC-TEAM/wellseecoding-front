import React, { useState, useCallback, useEffect } from 'react'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import { useDispatch } from 'react-redux'
import { DELETE_ALL_NOTIS_REQUEST, READ_ALL_NOTIS_REQUEST } from 'reducers/notifications'
import ConfirmModal from 'components/ConfirmModal'

type Props = {
  num: number
}
const AlarmTitle = ({ num }: Props) => {
  /* 전체 삭제 모달 */
  const [deleteModalShowing, setDeleteModalShowing] = useState(false)
  /* 전체 삭제 모달 결과값 - delete modal confirm */
  const [dmConfirmResult, setDmConfirmResult] = useState(false)
  /* 전체 읽기 모달 */
  const [readModalShowing, setReadModalShowing] = useState(false)
  /* 전체 읽기 모달 결과값 = read modal confirm */
  const [rmConfirmResult, setRmConfirmResult] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('dmConfirmResult', dmConfirmResult)
  }, [dmConfirmResult])

  useEffect(() => {
    if (dmConfirmResult) {
      setDeleteModalShowing(false)
      setDmConfirmResult(false)
      deleteAll()
    }
  }, [dmConfirmResult])

  useEffect(() => {
    if (rmConfirmResult) {
      setReadModalShowing(false)
      setRmConfirmResult(false)
      readAll()
    }
  }, [rmConfirmResult])

  useEffect(() => {
    if (deleteModalShowing) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [deleteModalShowing])

  const readAll = useCallback(() => {
    dispatch({
      type: READ_ALL_NOTIS_REQUEST,
    })
  }, [dispatch])

  const deleteAll = useCallback(() => {
    dispatch({
      type: DELETE_ALL_NOTIS_REQUEST,
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
      <div className="desc">
        <p>
          {num !== 0 ? (
            <span>
              <strong>{num}</strong>개의 읽지 않은 알림이 있습니다.
            </span>
          ) : (
            <span>읽지 않은 알림이 없습니다</span>
          )}
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
        <ConfirmModal
          onClose={() => setReadModalShowing(false)}
          confirmResult={() => setRmConfirmResult(true)}
          h3={'알림을 전체 읽음 표시 하시겠어요?'}
          p1={'내 서랍의 모든 알림이 읽음 표시로 처리됩니다'}
          p2={'읽음 표시한 알림은 이전 상태로 되돌릴 수 없습니다'}
        />
      )}
      {deleteModalShowing && (
        <ConfirmModal
          onClose={toggleDeleteModal}
          confirmResult={() => setDmConfirmResult(true)}
          h3={'알림을 모두 삭제 하시겠어요?'}
          p1={'내 서랍의 모든 알림이 삭제됩니다'}
          p2={'삭제된 알림은 다시 복구할 수 없습니다'}
        />
      )}
    </section>
  )
}

export default AlarmTitle

const alarmTitWrap = css`
  padding: 0 20px 22px;
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
