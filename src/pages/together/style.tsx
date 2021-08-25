import { css } from '@emotion/react'

export const togetherBoard = css`
  position: absolute;
  width: 100%;
  left: 0;
  background: #ffeee7;
  height: 100vh;
  margin-top: 18px;
  section {
    &:last-of-type {
      padding-bottom: 10em;
    }
  }
`
