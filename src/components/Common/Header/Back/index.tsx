import React from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'

function Back() {
  const router = useRouter()

  return (
    <header css={backHeader}>
      <button type="button" onClick={() => router.back()}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
      </button>
    </header>
  )
}

export default Back

const backHeader = css`
  padding: 0 20px;
  width: 100%;
  text-align: left;
  position: sticky;
  top: 0;
  background: #fff;
`
