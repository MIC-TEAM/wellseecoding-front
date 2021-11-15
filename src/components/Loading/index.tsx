import { css } from '@emotion/react'
import React from 'react'
import { Common } from 'src/styles/common'

const Loading = () => {
  return (
    <>
      <div css={loading}>loading...</div>
    </>
  )
}

const loading = css`
  font-size: ${Common.fontSize.title};
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Loading
