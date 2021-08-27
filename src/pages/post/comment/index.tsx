import { useCallback, useState } from 'react'
import { css } from '@emotion/react'
import { Common } from 'styles/common'

import BackOptional from 'components/Common/Header/BackOptional'

function Comment() {
  const [value, setValue] = useState('')
  const [visible, setVisible] = useState(false)

  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      alert(value)
      setValue('')
    },
    [value]
  )

  return (
    <>
      <BackOptional title="댓글" optional={false} />

      {/* 메인 게시글 부분 래퍼 */}
      <div css={CommentMain}>
        {/* 나 */}
        <div>
          <div css={CommentMainWrap}>
            <div css={MainWrapHead}>{/* 이미지 */}</div>
            <h3>김정민</h3>
            <span>프론트엔드</span>
          </div>

          <div css={MainWrapMain}>
            <p>언제쯤 시작하실 예정인가요?</p>
          </div>

          <div css={MainWrapBottom}>
            <button
              type="button"
              onClick={() => {
                setVisible(!visible)
              }}
            >
              답글달기
            </button>
            <span>9일 전</span>
          </div>
        </div>

        {/* 상대방 */}
        <div style={{ background: '#EFEBE8' }}>
          <div css={CommentMainWrap}>
            <div style={{ position: 'relative', marginRight: '20px' }}>
              <img src="/images/post/recoment.svg" alt="" />
            </div>

            <div css={MainWrapHead}>{/* 이미지 */}</div>
            <h3>김정민</h3>
            <span>프론트엔드</span>
          </div>

          <div css={MainWrapMain}>
            <p>언제쯤 시작하실 예정인가요?</p>
          </div>
          <div css={MainWrapBottom}>
            <button
              type="button"
              onClick={() => {
                setVisible(!visible)
              }}
            >
              답글달기
            </button>
            <span>9일 전</span>
          </div>
        </div>
      </div>

      {/* 푸터 댓글 달기  */}

      <form onSubmit={onSubmit} css={commentFooter}>
        {visible ? (
          <div className="recomment">
            <p>
              <strong>김정민</strong>님께 답글 달기
            </p>
            <button
              type="button"
              onClick={() => {
                setVisible(!visible)
              }}
            >
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
  position: fixed;
  width: 100%;
  bottom: 0;
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
