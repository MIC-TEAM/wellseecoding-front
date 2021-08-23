import { useCallback, useState } from 'react'
import BackOptional from 'components/Common/Header/BackOptional'
import { commentFooter, CommentMain, CommentMainWrap, MainWrapBottom, MainWrapHead, MainWrapMain } from './style'

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
