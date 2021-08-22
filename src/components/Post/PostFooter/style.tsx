import { css } from '@emotion/react'

export const footerNav = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 24px 24px 0px 0px;
  padding: 1em 0;
`
export const footerNavWrap = css`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  li {
    text-align: center;
    align-items: center;

    & a {
      display: flex;
      align-items: center;
    }
    & svg {
      margin-right: 9px;
    }
    &.active {
      path {
        fill: #ff6e35;
      }
      p {
        color: #ff6e35;
      }
    }
    span {
      font-size: 18px;
    }
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: #b6b2b0;
    font-weight: 500;
    line-height: 1.5rem;
    margin-top: 0.5em;
  }

  & button {
    background-color: #ff6e35;
    border-radius: 16px;
    width: 222px;
    height: 52px;

    color: white;
    text-align: center;

    font-family: 'Spoqa Han Sans Neo';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.30000001192092896px;
  }
`