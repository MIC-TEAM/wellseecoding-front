import { css } from '@emotion/react'
import FlatBox from 'components/Common/FlatBox'
import HashWrap from 'components/Common/HashWrap'
import BackOptional from 'components/Common/Header/BackOptional'
import PostFooter from 'components/Post/PostFooter'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { Common } from 'styles/common'
import faker from 'faker'
import { useEffect } from 'react'

function Post() {
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    makeDummyUser()
  })

  const makeDummyUser = useCallback(() => {
    const dummyUser = [
      {
        id: 1,
        title: faker.lorem.sentence(),
        name: faker.name.firstName(),
        job: faker.name.jobTitle(),

        term: faker.lorem.sentence(),
        loc: faker.lorem.sentence(),
        want: faker.lorem.sentence(),
        summary: faker.lorem.sentence(),
        limit: faker.lorem.sentence(),
        hashTags: [faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word()],
      },
    ]

    return [dummyUser]
  }, [])

  const [dummyUser] = makeDummyUser()
  return (
    <>
      <BackOptional title="" optional={true} />
      <div>
        <h1>{id}번 게시물</h1>
      </div>
      <main css={togetherBoard}>
        <div className="wrap">
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
                  <div css={flatBox}>
                    <select>
                      <option value="모집중">모집중</option>
                      <option value="모집중">기간종료</option>
                    </select>
                  </div>

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
        </div>
      </main>
      <PostFooter />
    </>
  )
}

const flatBox = css`
  background-color: #fff8f5;
`

const togetherBoard = css`
  width: 100%;
  height: 100vh;
  background-color: #fff8f5;
  .mainContents {
    background-color: #fff8f5;
  }
  .wrap {
    padding-bottom: 100px;
  }
  h1 {
    padding: 9px 21px;
    line-height: 28px;
    font-weight: 500;
    font-size: 2rem;
    background: #fff;
  }

  .myInfo {
    padding: 9px 21px;
    display: flex;
    align-items: center;
    background: #fff;
    div:first-of-type {
      margin-right: 13px;
      background-color: ${Common.colors.gray03};
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 4px;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${Common.colors.gray03};
    }
  }
  select {
    margin: 18px 20px;
    padding: 8px 10px;
    border: none;
    font-size: ${Common.fontSize.fs18};
    letter-spacing: -0.4px;
    background: #fff;
  }

  .flatBox {
    background-color: white;
    padding: 21px 22px;
    margin-bottom: 9px;

    h3 {
      font-family: 'Spoqa Han Sans Neo';
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.6000000238418579px;
      text-align: justify;
      margin-bottom: 14px;
    }

    p {
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
`

export default Post

// const dummyUser = [
//   {
//     id: 1,
//     title: '[서울] 오프라인 IOS 개발 스터디 합정이나 홍대 근처 스터디룸',
//     name: faker.name.firstName(),
//     job: faker.name.jobTitle(),

//     term: faker.lorem.sentence(),
//     loc: faker.lorem.sentence(),
//     want: faker.lorem.sentence(),
//     summary: faker.lorem.sentence(),
//     limit: faker.lorem.sentence(),
//     hashTags: [faker.random.word(), faker.random.word(), faker.random.word(), faker.random.word()],
//   },
// ]
