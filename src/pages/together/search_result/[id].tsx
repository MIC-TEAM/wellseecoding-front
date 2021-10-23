import { css } from '@emotion/react'
import TogetherHeader from 'components/Together/Header'
import SearchBox from 'components/Together/SearchBox'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { SEARCH_POSTS_REQUEST } from 'reducers/posts'
import Head from 'next/head'

const SearchResult = () => {
  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()

  const { searchPosts } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    // 검색 데이터 잘못 보내고 있는 부분 수정함
    if (typeof id === 'string' && !searchPosts.length) {
      searchKeyword(id)
    }
  }, [id])

  const searchKeyword = useCallback(
    (id) => {
      dispatch({
        type: SEARCH_POSTS_REQUEST,
        data: id,
      })
    },
    [dispatch]
  )

  return (
    <>
      <Head>
        <title>검색 결과 | wellseecoding</title>
      </Head>
      <div css={searchWrap}>
        <TogetherHeader optional={true} />
        <div style={{ padding: '0 20px' }}>
          <div css={searchWord}>
            <h2>
              <strong>{id}</strong> 을(를) 검색한 결과입니다.
            </h2>
          </div>

          <section>
            {searchPosts.length ? (
              searchPosts.map((item) => (
                <SearchBox key={item.id} id={item.id} listTitle={item.name} hashTag={item.tags} />
              ))
            ) : (
              <div>검색한 결과가 없습니다.</div>
            )}
          </section>
        </div>
      </div>
    </>
  )
}

export default SearchResult

const searchWord = css`
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -1px;
  font-size: 1.6rem;
  color: #262626;
  margin-top: 34px;
  h2 {
    margin-bottom: 20px;
  }
  strong {
    font-size: 2rem;
    font-weight: 700;
  }
`

const searchWrap = css`
  height: 97vh;
`
