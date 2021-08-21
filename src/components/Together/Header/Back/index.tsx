import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Common } from 'styles/common'

function TogetherBack() {
  const router = useRouter()

  return (
    <header css={backHeader}>
      <button type="button" onClick={() => router.back()}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
        <h1>모임 글쓰기</h1>
      </button>
    </header>
  )
}

export default TogetherBack

const backHeader = css`
  width: 100%;
  text-align: left;
  position: sticky;
  background: #fff;
  top: 0;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-weight: 500;
      font-size: ${Common.fontSize.fs20};
      line-height: 28px;
      letter-spacing: -0.4px;
      color: #262626;
      margin-left: -30px;
    }
  }
`
