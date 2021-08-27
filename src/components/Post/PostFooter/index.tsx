import Link from 'next/link'
import { css } from '@emotion/react'

function PostFooter() {
  return (
    <nav css={footerNav}>
      <div css={footerNavWrap}>
        <Link href="/post/comment">
          <a>
            <img src="/images/post/comment.svg" alt="댓글 달기" />
            <span>12</span>
          </a>
        </Link>

        <button className="joinButton">가입하기</button>
      </div>
    </nav>
  )
}

export default PostFooter

const footerNav = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 24px 24px 0px 0px;
  padding: 14px 0;
`
const footerNavWrap = css`
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-right: 9px;
  }
  span {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #444241;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: #b6b2b0;
    font-weight: 500;
    line-height: 1.5rem;
    margin-top: 0.5em;
  }

  .joinButton {
    background-color: #ff6e35;
    border-radius: 16px;
    width: 59.2%;
    padding: 16px 0;
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
`
