import TogetherSearchBar from 'components/Together/Header/Search'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { RESET_SEARCH_LIST } from 'reducers/posts'

interface keyInterface {
  id: number
  text: string
}

const Search = () => {
  const [keywords, setKeywords] = useState<keyInterface[]>([])
  const dispatch = useDispatch()

  const { searchPosts } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    if (searchPosts.length) {
      dispatch({ type: RESET_SEARCH_LIST })
    }
  }, [searchPosts, dispatch])

  // ① window 즉, 브라우저가 모두 렌더링된 상태에서 해당 함수를 실행할 수 있도록 작업
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]'
      setKeywords(JSON.parse(result))
    }
  }, [])

  // ② keywords 객체를 의존하여, 변경될 경우 새롭게 localStroage의 아이템 'keywords'를 세팅한다
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords))
  }, [keywords])

  // 검색어 추가
  const handleAddKeyword = (text: string) => {
    const newKeyword = {
      id: Date.now(),
      text: text,
    }
    setKeywords([newKeyword, ...keywords])
  }

  // 단일 검색어 삭제
  const handleRemoveKeyword = (id: number) => {
    const nextKeyword = keywords.filter((keyword) => {
      return keyword.id != id
    })
    setKeywords(nextKeyword)
  }

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([])
  }

  return (
    <>
      <Head>
        <title>검색하기 | wellseecoding</title>
        <meta name="description" content="검색 페이지입니다." />
      </Head>

      <div css={searchWrap}>
        <TogetherSearchBar onAddKeyword={handleAddKeyword} />

        <div style={{ padding: '0px 20px' }}>
          <div css={searchRecord}>
            <h2>최근 검색어</h2>
            {keywords.length ? (
              <button type="button" onClick={handleClearKeywords}>
                전체 삭제
              </button>
            ) : (
              <button />
            )}
          </div>

          <ul css={searchList}>
            {keywords.length ? (
              keywords.map((k) => (
                <li key={k.id}>
                  <p>
                    <Link href={`/together/search_result/${k.text}`}>
                      <a>{k.text}</a>
                    </Link>
                  </p>
                  <button className="removeBtn" type="button" onClick={() => handleRemoveKeyword(k.id)}>
                    <img src="/images/together/btn_delete.svg" alt="삭제" />
                  </button>
                </li>
              ))
            ) : (
              <div style={{ fontSize: '16px' }}>최근 검색어가 없습니다</div>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Search

const searchRecord = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 39px;
  margin-bottom: 31px;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #262626;
  }
  button {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -1px;
    color: #d3cfcc;
  }
`

const searchList = css`
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -1px;
      color: #444241;
    }
    button {
      width: 10%;
      img {
        float: right;
      }
    }
  }
`
const searchWrap = css`
  height: 97vh;
`
