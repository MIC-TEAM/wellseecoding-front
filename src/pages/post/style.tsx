import { css } from '@emotion/react'
import { Common } from 'styles/common'

export const togetherBoard = css`
  position: absolute;
  width: 100%;
  left: 0;
  height: auto;

  h1 {
    padding: 9px 21px;
    line-height: 28px;
    font-weight: 500;
    font-size: ${Common.fontSize.fs20};
  }

  .myInfo {
    padding: 9px 21px;
    display: flex;
    align-items: center;

    div:first-of-type {
      margin-right: 13px;
      background-color: ${Common.colors.gray03};
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    h3 {
      font-size: ${Common.fontSize.fs16};
      font-weight: 500;
      margin-bottom: 4px;
    }

    p {
      font-size: ${Common.fontSize.fs14};
      font-weight: 400;
      color: ${Common.colors.gray03};
    }
  }

  .mainContents {
    background-color: #ffeee7;
    height: 100vh;
    overflow: scroll;
    margin-bottom: 108px;

    select {
      margin: 18px 20px;
      padding: 8px 10px;
      border: none;
      font-size: ${Common.fontSize.fs18};
      letter-spacing: -0.4px;
    }
  }
  .flatBox {
    background-color: white;
    padding: 20px;
    margin-bottom: 9px;
    h3 {
      font-size: ${Common.fontSize.fs18};
      font-weight: 500;
      letter-spacing: -0.6px;
      margin-bottom: 14px;
    }
    p {
      font-size: ${Common.fontSize.fs16};
      font-weight: 700;
    }
  }
`
