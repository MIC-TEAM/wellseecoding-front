/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useEffect } from 'react'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { CLOSE_ISMODAL, OPEN_EDITMODE } from 'src/reducers/common'
import { RootState } from 'src/reducers'
import { DELETE_POST_REQUEST } from 'src/reducers/posts'
import usehandleOverFlow from 'src/hooks/useHandleOverflow'

const IsModal = () => {
  const { hidden, show } = usehandleOverFlow()
  const dispatch = useDispatch()

  const { isModal } = useSelector((state: RootState) => state.common)
  const { deletePostSuccess } = useSelector((state: RootState) => state.posts)

  // 내 게시글 삭제시 오류 때문에 일단 멈춰둠

  useEffect(() => {
    if (deletePostSuccess) {
      location.replace('/home')
    }
  }, [deletePostSuccess])

  useEffect(() => {
    isModal && hidden()
  }, [isModal, hidden])

  const setModal = useCallback(
    (e) => {
      e.stopPropagation()
      dispatch({
        type: CLOSE_ISMODAL,
      })
      show()
    },
    [dispatch, show]
  )

  const updatePost = useCallback(
    (e) => {
      e.stopPropagation()
      dispatch({
        type: CLOSE_ISMODAL,
      })
      dispatch({
        type: OPEN_EDITMODE,
      })
    },
    [dispatch]
  )

  const removePost = useCallback(
    (e, id) => {
      e.stopPropagation()
      dispatch({
        type: DELETE_POST_REQUEST,
        data: id,
      })
    },
    [dispatch]
  )

  return (
    <div css={modalWrap} onClick={setModal}>
      <div css={modalBtnWrap}>
        <div css={modalInner}>
          <button type="button" onClick={updatePost}>
            수정
          </button>
          <button type="button" onClick={(e) => removePost(e, Number(isModal.uniqId))}>
            삭제
          </button>
        </div>
        <div css={modalInner}>
          <button type="button" onClick={setModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default IsModal

const modalWrap = css`
  background-color: rgba(196, 196, 196, 0.6);
  width: 100%;
  height: 100vh;
  z-index: 10500;
  position: absolute;
  top: 0;
`

const modalBtnWrap = css`
  padding: 20px 20px 28px 20px;
  display: block;
  position: absolute;
  bottom: 0px;
  width: 100%;

  button + button {
    margin-bottom: 10px;
  }

  div + div {
    background-color: #fff !important;
  }
`

const modalInner = css`
  display: block;
  background-color: #f1f1f1;
  border-radius: 14px;

  button + button {
    border-top: 1px solid rgba(196, 196, 196, 0.6);
    color: #fb4843 !important;
  }

  button {
    color: #1c81fa;
    padding: 18px;
    display: block;
    width: 100%;
    font-size: 18px;
  }
`
