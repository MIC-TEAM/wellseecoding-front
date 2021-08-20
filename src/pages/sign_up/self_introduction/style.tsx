import { Common } from 'styles/common'
import { css } from '@emotion/react'

export const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

export const selfWrap = css`
  margin-top: 1.7em;
  margin-bottom: 20vh;
`

export const jobList = css`
  margin-top: 3em;
  font-size: ${Common.fontSize.fs20};
`
