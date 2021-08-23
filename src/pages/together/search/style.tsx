import { css } from '@emotion/react'

export const searchRecord = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 39px;
  margin-bottom: 31px;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #262626;
  }
  button {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #d3cfcc;
  }
`

export const searchList = css`
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -1px;
      color: #444241;
    }
    button {
      width: 10%;
      img {
        float: right;
      }
    }
  }
`
