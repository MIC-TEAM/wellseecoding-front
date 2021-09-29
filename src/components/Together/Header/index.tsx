/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import Link from 'next/link'
import { useRouter } from 'next/router'
import { TogetherHeaderInput } from './style'

function TogetherHeader() {
  const router = useRouter()

  return (
    <header css={TogetherHeaderInput}>
      <div onClick={() => router.push('/together/search')}>
        <span>모임 이름 / 소개 / 태그 검색</span>
      </div>
      <Link href="/alarm">
        <a>
          <img src="/images/header/alarm.svg" alt="알림페이지" />
        </a>
      </Link>
    </header>
  )
}

export default TogetherHeader
