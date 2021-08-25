import TogetherSearchBar from 'components/Together/Header/Search'
import SearchBox from 'components/Together/SearchBox'
import { searchWord, searchWrap } from './style'

const Search = () => {
  const word = '자바스크립트'

  const dummySearchBox = [
    {
      id: 1,
      comment: '[서울] 취업용 프로젝트 같이 하실 분 모집합니다!',
      hashTag: 'JavaScript',
    },
    {
      id: 2,
      comment: '[광주] 스프링 책 한권 같이 끝내실 분 구합니다!',
      hashTag: 'Spring',
    },
    {
      id: 3,
      comment: '[남양주] 포폴용 프로젝트 같이 하실 분 모집합니다!',
      hashTag: 'Python',
    },
    {
      id: 4,
      comment: '[부산] 취업 면접 준비 같이 하실 분 모집합니다!',
      hashTag: 'Django',
    },
    {
      id: 5,
      comment: '[서울대입구] 코테 준비 같이 하실 분 ?!',
      hashTag: 'Django',
    },
    {
      id: 6,
      comment: '[부산] 취업 면접 준비 같이 하실 분 모집합니다!',
      hashTag: 'Django',
    },
    {
      id: 7,
      comment: '[서울대입구] 코테 준비 같이 하실 분 ?!',
      hashTag: 'Django',
    },
  ]

  return (
    <div css={searchWrap}>
      <TogetherSearchBar />

      <div css={searchWord}>
        <h2>
          <strong>{word}</strong>
          를(을) 검색한 결과입니다.
        </h2>
      </div>

      <section>
        {dummySearchBox.map((item) => (
          <SearchBox key={item.id} listTitle={item.comment} hashTag={item.hashTag} />
        ))}
      </section>
    </div>
  )
}

export default Search
