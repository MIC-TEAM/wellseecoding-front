import FlatBox from 'components/Common/FlatBox'
import HashWrap from 'components/Common/HashWrap'
import BackOptional from 'components/Common/Header/BackOptional'
import PostFooter from 'components/Post/PostFooter'
import { togetherBoard } from './style'

const Post = () => {
  return (
    <>
      <BackOptional title="" optional={true} />
      <main css={togetherBoard}>
        {dummyUser &&
          dummyUser.map((d) => (
            <div key={d.id}>
              <h1>{d.title}</h1>
              <div className="myInfo">
                <div></div>
                <div>
                  <h3>{d.name}</h3>
                  <p>{d.job}</p>
                </div>
              </div>
              <div className="mainContents">
                <select>
                  <option value="모집중">모집중</option>
                  <option value="모집중">기간종료</option>
                </select>
                <FlatBox name="작업기간" contents={d.term} />
                <FlatBox name="일정/위치" contents={d.loc} />
                <FlatBox name="자격요건" contents={d.want} />
                <FlatBox name="스터디 설명" contents={d.summary} />
                <FlatBox name="모집인원" contents={d.limit} />
                <div className="flatBox">
                  <h3>해시태그</h3>
                  {d.hashTags.map((h, i) => (
                    <HashWrap key={i} content={h}></HashWrap>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </main>
      <PostFooter />
    </>
  )
}

export default Post

const dummyUser = [
  {
    id: 1,
    title: '[서울] 오프라인 IOS 개발 스터디 합정이나 홍대 근처 스터디룸',
    name: '김정민',
    job: '프론트엔드',

    term: '올해 하반기까지 끝내는 것이 목표',
    loc: '매주 일요일 오전/ 합정이나 홍대 스터디룸',
    want: '누구나 가능하나 프로그래밍 언어 하나 정도는 알았으면 합니다',
    summary:
      'Swift UI가 아니라 UIKit 기반 IOS 개발 스터디라는 점 참고해주세여 - 1주차 /2주차 미션 : 책 Do it! 스위프트로 아이폰 앱 만들기 입문 의 각 챕터들의 미션들을 매일 깃허브에 올려 과제를 수행하면서 대략적인 IOS 개발을 익힙니다. ',
    limit: '코로나 때문에 4명정도로 생각하고 있습니다.',
    hashTags: ['UIKit', 'IOS', '오프라인', '스터디'],
  },
]
