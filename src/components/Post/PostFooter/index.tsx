import Link from 'next/link'
import React from 'react'
import { footerNav, footerNavWrap } from './style'

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

        <Link href="/post/comment">
          <a className="joinButton">가입하기</a>
        </Link>
      </div>
    </nav>
  )
}

export default PostFooter
