import { css } from '@emotion/react'
import { Common } from 'styles/common'

export const authLoginButton = css`
  width: 100%;
  display: block;
  margin-top: 11em;
  button {
    margin-top: 9px;
    width: 100%;
    border-radius: 16px;
    padding: 16px 0;
    font-weight: 500;
    font-size: ${Common.fontSize.fs18};
    position: relative;
    img {
      position: absolute;
      left: 21px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

export const kakaoStyle = css`
  background: #fee500;
  color: #262626;
`

export const naverStyle = css`
  color: #ffffff;
  background: #03c75a;
`

export const email = css`
  color: #ffffff;
  background: #ff6e35;
`

export const passwordFind = css`
  text-align: center;
  font-size: ${Common.fontSize.fs16};
  margin-top: 26px;
  color: #8f8c8b;
  a {
    margin-left: 4px;
    color: #ff6e35;
    font-weight: 500;
    text-decoration-line: underline;
  }
`
