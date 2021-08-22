import Link from 'next/link'
import React from 'react'
import { footerNav, footerNavWrap } from './style'

function PostFooter() {
  return (
    <nav css={footerNav}>
      <ul css={footerNavWrap}>
        <li>
          <Link href="/post/comment">
            <a>
              <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40V40.0893V45L22.6705 44.1029C33.0243 40.6246 40 30.9225 40 20C40 8.95431 31.0457 0 20 0Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40V40.0893V45L22.6705 44.1029C33.0243 40.6246 40 30.9225 40 20C40 8.95431 31.0457 0 20 0Z"
                  fill="white"
                />
                <path
                  d="M20 40H21V39H20V40ZM20 45H19V46.3909L20.3184 45.9479L20 45ZM22.6705 44.1029L22.9889 45.0508H22.9889L22.6705 44.1029ZM1 20C1 9.50659 9.50659 1 20 1V-1C8.40202 -1 -1 8.40202 -1 20H1ZM20 39C9.50659 39 1 30.4934 1 20H-1C-1 31.598 8.40202 41 20 41V39ZM21 40.0893V40H19V40.0893H21ZM21 45V40.0893H19V45H21ZM22.352 43.1549L19.6816 44.0521L20.3184 45.9479L22.9889 45.0508L22.352 43.1549ZM39 20C39 30.4929 32.2987 39.8135 22.352 43.1549L22.9889 45.0508C33.75 41.4358 41 31.352 41 20H39ZM20 1C30.4934 1 39 9.50659 39 20H41C41 8.40202 31.598 -1 20 -1V1Z"
                  fill="#D3CFCC"
                  mask="url(#path-1-inside-1)"
                />
              </svg>
              <span>12</span>
            </a>
          </Link>
        </li>
        <button onClick={() => alert('가입하기!')}>가입하기</button>
      </ul>
    </nav>
  )
}

export default PostFooter
