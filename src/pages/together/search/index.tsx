import TogetherSearchBar from 'components/Together/Header/Search'
import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

interface keyInterface {
  id: number
  text: string
}

const Search = () => {
  const [keys, setKeys] = useState<keyInterface[]>([])

  // ① window 즉, 브라우저가 모두 렌더링된 상태에서 해당 함수를 실행할 수 있도록 작업
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]'
      setKeys(JSON.parse(result))
    }
  }, [])

  useEffect(() => {
    keys && console.log('keys:', typeof keys, keys)
  }, [keys])

  const handleRemove = (id: any, e?: any) => {
    const $removeBtn = document.querySelector('.removeBtn')

    if ($removeBtn) {
      $removeBtn.addEventListener('click', handleRemove)
    }

    console.log('target:', e.target)
    console.log('id:', id)
  }

  return (
    <div css={searchWrap}>
      <TogetherSearchBar />

      <div css={searchRecord}>
        <h2>최근 검색어</h2>
        <button type="button" onClick={() => alert('전체 삭제')}>
          전체 삭제
        </button>
      </div>

      <ul css={searchList}>
        {keys.map((k) => (
          <li key={k.id}>
            <p>{k.text}</p>
            <button className="removeBtn" type="button" onClick={() => handleRemove(k.id, event)}>
              <img src="/images/together/btn_delete.svg" alt="삭제" />
            </button>
          </li>
        ))}
      </ul>
    </div>
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
  padding: 0 20px;
`
