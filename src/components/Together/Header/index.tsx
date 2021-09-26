import Link from 'next/link'
import { TogetherHeaderInput } from './style'

function TogetherHeader() {
  return (
    <header css={TogetherHeaderInput}>
      <input
        type="search"
        onClick={() => (location.href = '/together/search')}
        placeholder="모임 이름 / 소개 / 태그 검색"
      />
      <Link href="/alarm">
        <a>
          <img src="/images/header/alarm.svg" alt="알림페이지" />
        </a>
      </Link>
    </header>
  )
}

export default TogetherHeader
