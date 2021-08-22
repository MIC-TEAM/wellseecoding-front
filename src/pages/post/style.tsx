import { css } from '@emotion/react'
import { Common } from 'styles/common'

export const togetherBoard = css`
  position: absolute;
  width: 100%;
  left: 0;
  height: auto;

  & h1 {
    padding: 9px 21px;
    line-height: 28px;
    font-weight: 500;
    font-size: 20px;
  }

  & .myInfo {
    padding: 9px 21px;
    display: flex;
    align-items: center;

    & div:first-of-type {
      margin-right: 13px;
      background-color: ${Common.colors.gray03};
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    & h3 {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 4px;
    }

    & p {
      font-size: 14px;
      font-weight: 400;
      color: ${Common.colors.gray03};
    }
  }

  & .mainContents {
    background-color: #ffeee7;
    height: 100vh;

    & select {
      margin: 18px 20px;
      padding: 8px 10px;
      border: none;
      font-family: 'Spoqa Han Sans Neo';
      font-size: 18px;
      font-style: normal;
      line-height: 22px;
      letter-spacing: -0.4000000059604645px;
      text-align: justify;
    }
  }

  & .flatBox {
    background-color: white;
    padding: 21px 22px;
    margin-bottom: 9px;

    & h3 {
      font-family: 'Spoqa Han Sans Neo';
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.6000000238418579px;
      text-align: justify;
      margin-bottom: 14px;
    }

    & p {
      font-size: 16px;
      font-weight: 700;
    }
  }
`
