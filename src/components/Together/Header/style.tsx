import { css } from '@emotion/react'

export const TogetherHeaderInput = css`
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 20px 5px !important;

  div {
    cursor: pointer;
    display: flex;
    width: 80%;
    border-bottom: 1.6px solid #ff6e35;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    background: url('/images/header/search.svg') no-repeat left center;
    padding-left: 23px;

    @media (max-width: 420px) {
      margin-left: 12px;
    }

    span {
      font-weight: 500;
      font-size: 18px;
      color: gray;
    }
  }
`
