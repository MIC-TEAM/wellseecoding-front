import React, { useCallback, useEffect, useState } from 'react'
import BackOptional from 'components/Common/Header/BackOptional'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Common } from 'styles/common'
import { css } from '@emotion/react'
import { deleteCommentRequest, FETCH_COMMENTS_REQUEST, WRITE_COMMENT_REQUEST } from 'reducers/comments'

function Comment() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [visible, setVisible] = useState(false)

  // const [replyForm, setReplyForm] = useState(false)
  // const [replyValue, setReplyValue] = useState('')

  const [localUname, setLocalUname] = useState<string>('')
  const [localUid, setLocalUid] = useState<string>('')

  const { comments } = useSelector((state: RootState) => state.comments)

  const dispatch = useDispatch()

  const { id } = router.query

  useEffect(() => {
    if (typeof window.localStorage !== 'undefined') {
      setLocalUname(localStorage.getItem('userName') || '')
      setLocalUid(localStorage.getItem('id') || '')
    }
  }, [])

  useEffect(() => {
    console.log('comments:', comments)
  }, [comments])

  useEffect(() => {
    console.log('LS Storage info:', localUname, localUid)
  }, [localUname, localUid])

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

  // const onReplyChange = useCallback((e) => {
  //   setReplyValue(e.target.value)
  // }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      try {
        dispatch({
          type: WRITE_COMMENT_REQUEST,
          data: {
            id: Number(id),
            parentId: 0,
            text: value,
          },
        })
        setValue('')
      } catch (err) {
        console.error(err)
      } finally {
        router.reload()
      }
    },
    [dispatch, value, id]
  )

  // const onReplySubmit = useCallback(() => {
  //   dispatch({
  //     type: WRITE_COMMENT_REQUEST,
  //     data: {
  //       id: Number(id),
  //       parentId: 0,
  //       text: value,
  //     },
  //   })
  // }, [dispatch, value, id])

  const handleState = useCallback(() => {
    setVisible((prev) => !prev)
    // setReplyForm(false)
    setName('')
  }, [])

  const handleName = useCallback((name) => {
    setVisible((prev) => !prev)
    setName(name)
  }, [])

  return (
    <>
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
                  {v.userId === Number(localUid) && (
                    <button
                      type="button"
                      onClick={() => {
                        alert(v.userId)
                        dispatch(deleteCommentRequest(v.userId))
                      }}
                    >
                      <img src="/images/header/setting.svg" alt="환경설정" />
                    </button>
                  )}
                </div>

                <div css={MainWrapMain}>{!v.deleted ? <p>{v.text}</p> : <p>삭제된 댓글입니다</p>}</div>

                <div css={MainWrapBottom}>
                  <button
                    type="button"
                    onClick={() => {
                      handleName(v.userName)
                    }}
                  >
                    답글달기
                  </button>
                  {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60) >= 1 ? (
                    <span> {Math.floor((Date.now() / 1000 - v.commentDate) / 24 / 60 / 60)} 일전 </span>
                  ) : (
                    <span>오늘</span>
                  )}
                </div>
              </div>

              {/* 답글 달기 관련 토클 창*/}
              {/* {replyForm && (
                <div
                  style={{
                    padding: 20,
                    position: 'relative',
                    border: '1px solid gray',
                  }}
                >
                  <div style={{ marginBottom: 10 }}>
                    <span>{localUname}</span>
                  </div>
                  <textarea
                    value={replyValue}
                    onChange={onReplyChange}
                    placeholder="답글달기"
                    rows={1}
                    style={{ border: 'none', width: '100%', height: '2em', resize: 'none', background: 'inherit' }}
                  />
                  <div style={{ textAlign: 'end' }}>
                    <button
                      style={{ marginRight: 5 }}
                      onClick={() => {
                        setReplyForm(false)
                        setVisible(false)
                      }}
                    >
                      <span style={{ fontSize: 10 }}>취소</span>
                    </button>
                    <button onClick={onReplySubmit}>
                      <span style={{ fontSize: 10 }}>등록</span>
                    </button>
                  </div>
                </div>
              )} */}

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
                        {v.userId === Number(localUid) && (
                          <button
                            type="button"
                            onClick={() => {
                              alert(v.userId)
                              dispatch(deleteCommentRequest(v.userId))
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
          <div />
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
    </>
  )
}

export default Comment

const CommentMain = css`
  height: 100vh;
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
  position: absolute;
  width: 100%;
  bottom: -1px;
  left: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 9999;
  padding: 20px 20px 40px;
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
