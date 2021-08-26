import TogetherSearchBar from 'components/Together/Header/Search'
import { css } from '@emotion/react'

const Search = () => {
  return (
    <div css={searchWrap}>
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
