import { css } from '@emotion/react'

export const box = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;
  .top {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }

  a {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 24px;
    letter-spacing: -1px;
    color: #b6b2b0;
  }
  li {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 24px;
    letter-spacing: -1px;
    color: #444241;
    padding: 18px 0 0;
  }
`
