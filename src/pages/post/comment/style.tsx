import { css } from '@emotion/react'
import { Common } from 'styles/common'

export const CommentMain = css`
  height: 100vh;
  background: #f5f5f5;
  & > div {
    padding: 20px;
    background: #fff;
  }
`

export const CommentMainWrap = css`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  h3 {
    margin-right: 4px;
    font-size: ${Common.fontSize.fs16};
  }
  span {
    font-size: ${Common.fontSize.fs14};
    color: #8f8c8b;
  }
`

export const MainWrapHead = css`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #c4c4c4;
  margin-right: 6px;
`

export const MainWrapMain = css`
  margin-bottom: 20px;
  font-size: ${Common.fontSize.fs16};
`

export const MainWrapBottom = css`
  display: flex;
  justify-content: space-between;
  font-size: ${Common.fontSize.fs14};
  align-items: center;
  button {
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    padding: 8px 12px;
  }
  span {
    font-size: 14px;
    font-size: ${Common.fontSize.fs14};
    letter-spacing: -0.4px;
    color: #8f8c8b;
  }
`

export const commentFooter = css`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 9999;
  padding: 20px 20px 40px;
  .recomment {
    position: absolute;
    width: 100%;
    top: -49px;
    padding: 16px 0;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -1px;
    color: #444241;
    background: #efebe8;
    left: 0;
    display: flex;
    justify-content: space-between;
    strong {
      padding-left: 20px;
      font-weight: 700;
    }
    button {
      padding-right: 20px;
    }
  }
  input {
    background: #f5f5f5;
    border: 1px solid #d3cfcc;
    width: 100%;
    height: 48px;
    margin-right: 8px;
    padding: 15px;
    border-radius: 10px;
    font-size: ${Common.fontSize.fs16};
  }
`

export const FooterComment = css`
  position: relative;
`

export const FooterReComment = css`
  position: absolute;
  width: 100%;
  background: #fff;
  top: -20px;
`
