import React, { useCallback, useEffect, useState } from 'react'
import BackOptional from 'components/Common/Header/BackOptional'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { Common } from 'styles/common'
import { css } from '@emotion/react'
import { writeCommentRequest } from 'reducers/comments'

function Comment() {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [name, setName] = useState('')
  const [visible, setVisible] = useState(false)
  const [num, setNum] = useState(3)

  const { comments } = useSelector((state: RootState) => state.comments)

  const dispatch = useDispatch()

  const { id } = router.query

  useEffect(() => {
    console.log('comments:', comments)
  }, [comments])

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      alert(value)
      dispatch(
        writeCommentRequest({
          id: num,
          name: '이준희',
          job: '프론트엔드',
          text: value,
          me: true,
          date: '2021-10-03',
        })
      )
      console.log('done')
      setValue('')
      setNum((num) => num + 1)
    },
    [value, dispatch, num]
  )

  const handleState = useCallback(() => {
    setVisible((prev) => !prev)
    setName('')
  }, [])

  const handleName = useCallback((name) => {
    setVisible((prev) => !prev)
    setName(name)
  }, [])

  return (
    <>
      <BackOptional title="댓글" optional={false} />
      <h1>{id}번 글에 대한 Comment입니다</h1>
      <div css={CommentMain}>
        {/* 나 */}
        {comments.map((v) => (
          <div key={v.id}>
            <div css={CommentMainWrap}>
              <div css={MainWrapHead}>{/* 이미지 */}</div>
              <h3>{v.name}</h3>
              <span>{v.job}</span>
            </div>

            <div css={MainWrapMain}>
              <p>{v.text}</p>
            </div>

            <div css={MainWrapBottom}>
              <button
                type="button"
                onClick={() => {
                  handleName(v.name)
                }}
              >
                답글달기
              </button>
              <span>{v.date}</span>
            </div>
          </div>
        ))}
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
    padding: 20px;
    background: #fff;
  }
`

const CommentMainWrap = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  h3 {
    margin-right: 4px;
    font-size: ${Common.fontSize.fs16};
  }
  span {
    font-size: ${Common.fontSize.fs14};
    color: #8f8c8b;
  }
`

const MainWrapHead = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 6px;
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
