import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

export const loginFrom = css`
  margin-top: 1.7em;
`

export const loginTitleWrap = css`
  margin-top: 3.7em;
`

export const loginButton = css`
  margin-top: 48px;
  width: 100%;
  border-radius: 16px;
  padding: 16px 0;
  color: #ffffff;
  background: ${Common.colors.gray04};
  font-size: ${Common.fontSize.fs18};
  &.orangeBtn {
    background: ${Common.colors.orange};
  }
`

export const passwordFind = css`
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  margin-top: 26px;
  color: #8f8c8b;
  a {
    font-weight: 500;
    margin-left: 4px;
    color: #ff6e35;
    text-decoration-line: underline;
  }
`
