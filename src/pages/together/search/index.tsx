import TogetherSearchBar from 'components/Together/Header/Search'
import { searchList, searchRecord } from './style'

const Search = () => {
  return (
    <>
      <TogetherSearchBar />

      <div css={searchRecord}>
        <h2>최근 검색어</h2>
        <button type="button">전체 삭제</button>
      </div>

      <ul css={searchList}>
        <li>
          <p>자바스크립트</p>
          <button type="button">
            <img src="/images/together/btn_delete.svg" alt="삭제" />
          </button>
        </li>
        <li>
          <p>자바스크립트</p>
          <button type="button">
            <img src="/images/together/btn_delete.svg" alt="삭제" />
          </button>
        </li>
        <li>
          <p>자바스크립트</p>
          <button type="button">
            <img src="/images/together/btn_delete.svg" alt="삭제" />
          </button>
        </li>
      </ul>
    </>
  )
}

export default Search
