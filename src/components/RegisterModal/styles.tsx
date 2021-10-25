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
      img {
        position: absolute;
        top: -78px;
        z-index: 100;
      }
    }
    &__box {
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
      }
      p {
        font-size: 1.6rem;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.6px;
        color: #696766;
        padding: 10px 0 20px 0;
      }
    }
    &__btn {
      display: flex;
      justify-content: center;
      align-content: center;
      width: 100%;
      border-top: 1px solid #efebe8;
      button {
        padding: 18px 0;
        font-size: 2rem;
        width: 50%;
        box-sizing: border-box;
        &.delete {
          color: #ff6e35;
          border-left: 1px solid #efebe8;
        }
      }
    }
  }
`
