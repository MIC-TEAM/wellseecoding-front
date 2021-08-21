import { css } from '@emotion/react'
import { Common } from 'styles/common'

export const studyContentBox = css`
  background: #ffffff;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 5em;
  }
  h2 {
    font-weight: 500;
    font-size: ${Common.fontSize.fs22};
    color: ${Common.colors.black};
    line-height: 26px;
    letter-spacing: -0.6px;
  }
  h3 {
    font-weight: 500;
    font-size: ${Common.fontSize.fs18};
    color: ${Common.colors.black};
    line-height: 26px;
    letter-spacing: -0.6px;
    padding-bottom: 16px;
  }
  p {
    background: #ffeee7;
    border-radius: 56px;
    padding: 8px 12px;
    color: #ff6e35;
    display: inline-block;
    font-weight: bold;
    font-size: ${Common.fontSize.fs14};
    line-height: 20px;
  }
`
