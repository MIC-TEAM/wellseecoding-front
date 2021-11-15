import { css } from '@emotion/react'

export const box = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;
  .skill {
    margin-bottom: 2rem;
    ul {
      display: flex;

      li {
        margin-right: 5px;
      }
    }
  }
  .profile {
    display: grid;
    grid-template-columns: 1fr 6fr auto;
    align-items: center;
    margin-bottom: 15px;
    .me {
      margin-left: 1.2em;
      h2 {
        margin-bottom: 6px;
      }
    }

    p {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      box-sizing: border-box;
      object-fit: cover;
      background-color: #d3cfcc;
      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-sizing: border-box;
        object-fit: cover;
      }
    }
    strong {
      font-size: 1.6rem;
      line-height: 22px;
      letter-spacing: -0.6px;
      color: #ff6e35;
    }
    button {
      justify-content: end;
    }
  }
  h2 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 22px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }

  .moreme {
    &.career {
      margin-bottom: 2rem;
    }
    h3 {
      font-size: 1.6rem;
      line-height: 20px;
      letter-spacing: -0.4px;
      color: #8f8c8b;
      margin-bottom: 8px;
    }
    p,
    li {
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 24px;
      letter-spacing: -1px;
      color: #444241;
    }
  }
`
