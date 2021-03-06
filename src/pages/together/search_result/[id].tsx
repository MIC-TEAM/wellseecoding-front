import { css } from '@emotion/react'
import TogetherHeader from 'src/components/Together/Header'
import SearchBox from 'src/components/Together/SearchBox'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { RESET_POST_LIST, SEARCH_POSTS_REQUEST } from 'src/reducers/posts'
import Head from 'next/head'
import axios from 'axios'

const SearchResult = () => {
  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()

  const { searchPosts, post } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
  }, [])

  useEffect(() => {
    if (post.length) {
      dispatch({
        type: RESET_POST_LIST,
      })
    }
  }, [post, dispatch])

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
        <meta name="description" content="검색 결과를 나타내는 페이지입니다." />
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
  overflow-y: auto;
`
