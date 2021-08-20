import { TogetherHeaderSearch } from './style'

function TogetherSearchBar() {
  return (
    <header css={TogetherHeaderSearch}>
      <input type="search" placeholder="모임 이름 / 소개 / 태그 검색" />
    </header>
  )
}

export default TogetherSearchBar
