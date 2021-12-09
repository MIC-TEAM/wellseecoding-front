import Link from 'next/link'
import { css } from '@emotion/react'

type Props = {
  notis: boolean
}

function HomeHeader({ notis }: Props) {
  return (
    <header css={HomeHeaderWrap}>
      <Link href="/alarm">
        {notis ? (
          <a title="알림 페이지로 이동">
            <img src="/images/header/alarm.svg" alt="알림페이지" />
          </a>
        ) : (
          <a title="알림 페이지로 이동">
            <img src="/images/header/nonAlarm.svg" alt="알림페이지" />
          </a>
        )}
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
