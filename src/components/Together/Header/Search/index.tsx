import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { TogetherHeaderSearch } from './style'

type Props = {
  onAddKeyword: (string: string) => void
}

function TogetherSearchBar({ onAddKeyword }: Props) {
  const [searchValue, setSearchValue] = useState<string>('')

  const router = useRouter()

  const onChangeSearch = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      // 로컬 스토리지에 해당 searchValue를 저장해야 한다
      router.push(`/together/search_result/${searchValue}`).then(() => window.scrollTo(0, 0))
      onAddKeyword(searchValue)
      setSearchValue('')
    },
    [searchValue, router, onAddKeyword]
  )

  return (
    <header css={TogetherHeaderSearch}>
      <form onSubmit={onSubmit}>
        <input type="search" value={searchValue} onChange={onChangeSearch} placeholder="모임 이름 / 소개 / 태그 검색" />
      </form>
    </header>
  )
}

export default TogetherSearchBar
