import { css } from '@emotion/react'

export const Modal = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  .modal {
    &__wrap {
      max-width: 600px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    &__box {
      padding: 30px;
      box-sizing: border;
      overflow: hidden;
      width: 77%;
      background: #ffffff;
      backdrop-filter: blur(12px);
      border-radius: 16px;
      text-align: center;
      h3 {
        font-weight: 700;
        font-size: 2.2rem;
        line-height: 26px;
        letter-spacing: -1px;
        color: #262626;
        padding-top: 33px;

        @media (max-width: 420px) {
          font-size: 1.7rem;
        }
      }
      p {
        font-size: 1.6rem;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.6px;
        color: #696766;
        padding: 10px 0 20px 0;

        @media (max-width: 420px) {
          font-size: 1.3rem;
        }
      }
    }
  }
`
