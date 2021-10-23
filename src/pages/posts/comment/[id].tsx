import React, { useCallback, useEffect, useState } from 'react'
import BackOptional from 'components/Common/Header/BackOptional'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Common } from 'styles/common'
import { css } from '@emotion/react'
import { FETCH_COMMENTS_REQUEST, WRITE_COMMENT_REQUEST } from 'reducers/comments'
import Head from 'next/head'

import CommentModal from 'components/Common/CommentModal'
import EditComment from 'components/Post/EditComment'
import { OPEN_ISMODAL } from 'reducers/common'
import usehandleOverFlow from 'hooks/useHandleOverflow'
import WellseeError from 'components/Common/wellseeError'

function Comment() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [visible, setVisible] = useState(false)

  /* comments 리듀서에 들어있는 각 항목 당 설정할 commentId 답글 달기를 위해 state로 지정함 */
  const [commentId, setCommentId] = useState(0)

  /* 수정 모드 시에 클릭한 인풋박스만 수정모드를 주기 위한 작업*/
  const [editNum, setEditNum] = useState(0)

  /* 로컬 스토리지에 저장된 userName과 userId */
  const [localUid, setLocalUid] = useState<string>('')

  const { comments, writeCommentSuccess } = useSelector((state: RootState) => state.comments)
  const { isModal, editMode } = useSelector((state: RootState) => state.common)

  const dispatch = useDispatch()
  const { hidden } = usehandleOverFlow()

  const { id } = router.query

  useEffect(() => {
    if (isModal) setEditNum(Number(isModal.uniqId))
  }, [isModal])

  useEffect(() => {
    if (typeof window.localStorage !== 'undefined') {
      setLocalUid(localStorage.getItem('id') || '')
    }
  }, [])

  useEffect(() => {
    if (writeCommentSuccess) router.reload()
  }, [writeCommentSuccess, router])

  useEffect(() => {
    if (id && !comments.length) getComment(id)
  }, [id])

  const getComment = useCallback(
    async (id) => {
      dispatch({
        type: FETCH_COMMENTS_REQUEST,
        data: Number(id),
      })
    },
    [dispatch]
  )

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  // parentId가 0 일 경우에는 children 답글이 아닌, 기본 댓글로 작성된다
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      try {
        dispatch({
          type: WRITE_COMMENT_REQUEST,
          data: {
            id: Number(id),
            parentId: commentId,
            text: value,
          },
        })
        setValue('')
      } catch (err) {
        console.error(err)
      }
    },
    [dispatch, value, id, commentId]
  )

  const handleState = useCallback(() => {
    setVisible((prev) => !prev)
    setName('')
    setCommentId(0)
  }, [])

  const handleInfo = useCallback((name, id) => {
    window.scrollTo(0, document.body.scrollHeight)
    setVisible((prev) => !prev)
    setName(name)
    setCommentId(id)
  }, [])

  const setModal = useCallback(
    (id) => {
      window.scrollTo(0, 0)
      hidden()
      dispatch({
        type: OPEN_ISMODAL,
        data: id,
      })
    },
    [dispatch, hidden]
  )

  return (
    <>
      <Head>
        <title>댓글 | wellseecoding</title>
      </Head>
      <BackOptional title="댓글" optional={false} />
      <div css={CommentMain}>
        {/* 나 */}
        {comments.length ? (
          comments.map((v) => (
            <div key={v.commentId}>
              <div style={{ padding: '20px' }}>
                <div css={CommentMainWrap}>
                  <div css={MainWrapHead}>{/* 이미지 */}</div>
                  <h3>{v.userName}</h3>
                  {/* <span>{v.userName}</span> */}
                  {v.userId === Number(localUid) && !v.deleted && (
                    <button
                      type="button"
                      onClick={() => {
                        setModal(v.commentId)
                      }}
                    >
                      <img src="/images/header/setting.svg" alt="환경설정" />
                    </button>
                  )}
                </div>

                <div css={MainWrapMain}>
                  {!v.deleted ? (
                    <>
                      {editMode && editNum == Number(v.commentId) ? (
                        <EditComment postId={id} commentId={v.commentId} value={v.text} />
                      ) : (
                        <p>{v.text}</p>
                      )}
                    </>
                  ) : (
                    <p style={{ color: '#8f8c8b', fontStyle: 'oblique' }}>삭제된 댓글입니다</p>
                  )}
                </div>

                <div css={MainWrapBottom}>
                  {!v.deleted ? (
                    <button
                      type="button"
                      onClick={() => {
                        handleInfo(v.userName, v.commentId)
                      }}
                    >
                      답글달기
                    </button>
                  ) : (
                    <button type="button" disabled style={{ color: 'rgb(143, 140, 139)' }}>
                      답글달기
                    </button>
                  )}

                  {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60) >= 1 ? (
                    <span> {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60)} 일전 </span>
                  ) : (
                    <span>오늘</span>
                  )}
                </div>
              </div>

              {/* 자식 요소 댓글 달기 */}
              {v.children.length ? (
                v.children.map((v) => (
                  <div style={{ padding: '20px', background: '#efebe8' }} key={v.commentId}>
                    <div css={CommentMainWrap}>
                      <div style={{ position: 'relative', marginRight: '20px' }}>
                        <img src="/images/post/recoment.svg" alt="" />
                      </div>
                      <div css={MainWrapHead}>{/* 이미지 */}</div>
                      <h3>{v.userName}</h3>
                      {/* <span>{v.userName}</span> */}
                      <div>
                        {v.userId === Number(localUid) && !v.deleted && (
                          <button
                            type="button"
                            onClick={() => {
                              setModal(v.commentId)
                            }}
                          >
                            <img src="/images/header/setting.svg" alt="환경설정" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div css={MainWrapMain}>{!v.deleted ? <p>{v.text}</p> : <p>삭제된 댓글입니다</p>}</div>

                    <div css={MainWrapBottom}>
                      <button type="button">답글달기</button>
                      {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60) >= 1 ? (
                        <span> {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60)} 일전 </span>
                      ) : (
                        <span>오늘</span>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div />
              )}
            </div>
          ))
        ) : (
          // comments가 없을 때!
          <WellseeError text="아직 달린 댓글이 없어요.." />
        )}
      </div>

      <form onSubmit={onSubmit} css={commentFooter}>
        {visible ? (
          <div className="recomment">
            <p>
              <strong>{name}</strong>님께 답글 달기
            </p>
            <button type="button" onClick={handleState}>
              <img src="/images/post/comment_delet.svg" alt="답글 취소" />
            </button>
          </div>
        ) : (
          ''
        )}

        <input type="text" value={value} onChange={onChange} placeholder="댓글 달기" />
        <button type="submit">
          <img src="/images/post/upload.svg" alt="댓글 업로드 버튼" />
        </button>
      </form>

      {isModal.open && <CommentModal />}
    </>
  )
}

export default Comment

const CommentMain = css`
  height: auto;
  border: 1px solid rgb(243, 243, 243);
  margin-bottom: 60px;
  background: #f5f5f5;
  width: 100%;
  & > div {
    background: #fff;
  }
`

const CommentMainWrap = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;

  h3 {
    margin-right: 4px;
    font-size: ${Common.fontSize.fs16};
  }
  span {
    font-size: ${Common.fontSize.fs14};
    color: #8f8c8b;
  }
  button {
    position: absolute;
    right: 0px;
  }
`

const MainWrapHead = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 6px;

  img {
    height: 18px;
  }
`

const MainWrapMain = css`
  margin-bottom: 20px;
  font-size: ${Common.fontSize.fs16};
`

const MainWrapBottom = css`
  display: flex;
  justify-content: space-between;
  font-size: ${Common.fontSize.fs14};
  align-items: center;
  button {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    padding: 8px 12px;
  }
  span {
    font-size: 14px;
    font-size: ${Common.fontSize.fs14};
    letter-spacing: -0.4px;
    color: #8f8c8b;
  }
`

const commentFooter = css`
  border: 1px solid rgb(243, 243, 243);
  position: relative;
  width: 100%;
  bottom: -1px;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 9999;
  padding: 20px;
  .recomment {
    position: absolute;
    width: 100%;
    top: -49px;
    padding: 16px 0;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -1px;
    color: #444241;
    background: #efebe8;
    left: 0;
    display: flex;
    justify-content: space-between;
    strong {
      padding-left: 20px;
      font-weight: 700;
    }
    button {
      padding-right: 20px;
    }
  }
  input {
    background: #f5f5f5;
    border: 1px solid #d3cfcc;
    width: 100%;
    height: 48px;
    margin-right: 8px;
    padding: 15px;
    border-radius: 10px;
    font-size: ${Common.fontSize.fs16};
  }
`
