/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Link from 'next/link'
import { useRouter } from 'next/router'
import { TogetherHeaderInput } from './style'

export type Props = {
  optional?: boolean
  notis?: boolean
}

function TogetherHeader({ optional, notis }: Props) {
  const router = useRouter()

  return (
    <header css={TogetherHeaderInput}>
      {optional && (
        <button onClick={() => router.back()}>
          <img src="/images/header/searchBack.svg" alt="뒤로가기" />
        </button>
      )}

      <div onClick={() => router.push('/together/search').then(() => window.scrollTo(0, 0))}>
        <span>모임 이름 / 소개 / 태그 검색</span>
      </div>
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

export default TogetherHeader
