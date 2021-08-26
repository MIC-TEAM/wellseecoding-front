import Link from 'next/link'
import { css } from '@emotion/react'

function HomeHeader() {
  return (
    <header css={HomeHeaderWrap}>
      <Link href="/alarm">
        <a>
          <img src="/images/header/alarm.svg" alt="알림페이지" />
        </a>
      </Link>
    </header>
  )
}

export default HomeHeader

export const HomeHeaderWrap = css`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
`
