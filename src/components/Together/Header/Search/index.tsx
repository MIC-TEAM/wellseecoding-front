import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { TogetherHeaderSearch } from './style'

function TogetherSearchBar() {
  const [searchValue, setSearchValue] = useState<string>('')

  const router = useRouter()

  const onChangeSearch = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      // 로컬 스토리지에 해당 searchValue를 저장해야 한다
      setSearchValue('')
      const newKeywords = [
        {
          id: Date.now(),
          text: searchValue,
        },
      ]

      localStorage.setItem('keywords', JSON.stringify(newKeywords))
      router.push(`/together/search_result/${searchValue}`)
    },
    [searchValue, router]
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
