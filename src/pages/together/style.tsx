import { css } from '@emotion/react'
import { Common } from 'styles/common'

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
  h2 {
    font-size: ${Common.fontSize.fs22};
    color: ${Common.colors.black};
    font-weight: 500;
    margin-top: 22px;
    margin-left: 20px;
    margin-bottom: 16px;
  }
`
