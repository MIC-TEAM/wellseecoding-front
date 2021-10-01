import { css } from '@emotion/react'
import axios from 'axios'
import TogetherHeader from 'components/Together/Header'
import SearchBox from 'components/Together/SearchBox'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { myConfig } from 'sagas'
import { PostType } from 'types'

const SearchResult = () => {
  const router = useRouter()
  const { id } = router.query

  console.log(router.query.id)

  const [dummySearchBox, setDummySearchBox] = useState<PostType[]>([])

  useEffect(() => {
    if (typeof id === 'string') {
      // const stringId = encodeURI(id)
      searchKeyword(id)
    } else {
      alert('잘못된 접근입니다 🧐')
      router.back()
    }
  }, [id, router])

  const searchKeyword = useCallback(async (id) => {
    try {
      await axios
        .get(`https://api.wellseecoding.com/api/v1/posts?keyword=${id}`, myConfig)
        .then((res) => setDummySearchBox(res.data))
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <>
      <div css={searchWrap}>
        <TogetherHeader />

        <div css={searchWord}>
          <h2>
            <strong>{id}</strong> 을(를) 검색한 결과입니다.
          </h2>
        </div>

        <section>
          {dummySearchBox.map((item) => (
            <SearchBox key={item.id} id={item.id} listTitle={item.name} hashTag={item.tags} />
          ))}
        </section>
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
  padding: 0 20px;
`
