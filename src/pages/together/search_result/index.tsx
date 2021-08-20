import TogetherSearchBar from 'components/Together/Header/Search'
import SearchBox from 'components/Together/SearchBox'
import { searchWord } from './style'

const Search = () => {
  const word = '자바스크립트'

  return (
    <>
      <TogetherSearchBar />

      <div css={searchWord}>
        <h2>
          <strong>{word}</strong>
          를(을) 검색한 결과입니다.
        </h2>
      </div>

      <section>
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Spring" />
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Javascript" />
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Spring" />
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Javascript" />
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Spring" />
        <SearchBox listTitle="[서울] 취업용 프로젝트 같이하실 분  모집합니다." hashTag="Javascript" />
      </section>
    </>
  )
}

export default Search
