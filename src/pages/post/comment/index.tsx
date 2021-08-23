import BackOptional from 'components/Common/Header/BackOptional'
import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

function Comment() {
  const [value, setValue] = useState('')

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
      <CommentMain>
        {/* 나 */}
        <div>
          <CommentMainWrap>
            <MainWrapHead>{/* 이미지 */}</MainWrapHead>
            <h3>김정민</h3>
            <span>프론트엔드</span>
          </CommentMainWrap>
          <MainWrapMain>
            <span>언제쯤 시작하실 예정인가요?</span>
          </MainWrapMain>
          <MainWrapBottom>
            <button>답글달기</button>
            <span>9일 전</span>
          </MainWrapBottom>
        </div>

        {/* 상대방 */}
        <div style={{ background: '#EFEBE8' }}>
          <CommentMainWrap>
            <div style={{ position: 'relative', marginRight: '20px' }}>
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 16H0.5V16.5H1V16ZM17.3536 16.3536C17.5488 16.1583 17.5488 15.8417 17.3536 15.6464L14.1716 12.4645C13.9763 12.2692 13.6597 12.2692 13.4645 12.4645C13.2692 12.6597 13.2692 12.9763 13.4645 13.1716L16.2929 16L13.4645 18.8284C13.2692 19.0237 13.2692 19.3403 13.4645 19.5355C13.6597 19.7308 13.9763 19.7308 14.1716 19.5355L17.3536 16.3536ZM0.5 0V16H1.5V0H0.5ZM1 16.5H17V15.5H1V16.5Z"
                  fill="#262626"
                />
              </svg>
            </div>
            <MainWrapHead>{/* 이미지 */}</MainWrapHead>
            <h3>김정민</h3>
            <span>프론트엔드</span>
          </CommentMainWrap>
          <MainWrapMain>
            <span>언제쯤 시작하실 예정인가요?</span>
          </MainWrapMain>
          <MainWrapBottom>
            <button>답글달기</button>
            <span>9일 전</span>
          </MainWrapBottom>
        </div>
      </CommentMain>
      {/* 푸터 댓글 달기  */}
      <form onSubmit={onSubmit} css={commentFooter}>
        <input type="text" value={value} onChange={onChange} placeholder="댓글 달기" />
        <button>
          <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="49" height="48" rx="16" fill="#FF6E35" />
            <path
              d="M24 32C24 32.5523 24.4477 33 25 33C25.5523 33 26 32.5523 26 32H24ZM25.7071 15.2929C25.3166 14.9024 24.6834 14.9024 24.2929 15.2929L17.9289 21.6569C17.5384 22.0474 17.5384 22.6805 17.9289 23.0711C18.3195 23.4616 18.9526 23.4616 19.3431 23.0711L25 17.4142L30.6569 23.0711C31.0474 23.4616 31.6805 23.4616 32.0711 23.0711C32.4616 22.6805 32.4616 22.0474 32.0711 21.6569L25.7071 15.2929ZM26 32V16H24V32H26Z"
              fill="white"
            />
          </svg>
        </button>
      </form>
    </>
  )
}

export const CommentMain = styled.div`
  height: auto;

  & > div {
    padding: 20px;
  }
`

export const CommentMainWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & h3 {
    margin-right: 4px;
  }
`

export const MainWrapHead = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 6px;
`

export const MainWrapMain = styled.div`
  margin-bottom: 20px;
`

export const MainWrapBottom = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
  }
`

export const commentFooter = css`
  position: fixed;
  width: 95%;
  bottom: 20px;
  display: flex;
  background-color: white;
  z-index: 9999;

  svg {
    margin-right: 20px;
  }

  input {
    background: #f5f5f5;
    border: 1px solid #d3cfcc;
    width: 100%;
    height: 48px;
    margin-right: 8px;
    padding: 15px;
    border-radius: 10px;
  }
`

export default Comment
