import { css } from '@emotion/react'
import axios from 'axios'
import JoinHeader from 'components/Common/Header/Back'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { myConfig } from 'sagas'

interface State {
  userId: number
  postId: number
  name: string
  authorized: boolean
}

const ClassJoinList = () => {
  const router = useRouter()
  const { id } = router.query

  const [members, setMembers] = useState<State[]>([])

  useEffect(() => {
    console.log('members:', members)
  }, [members])

  useEffect(() => {
    if (id) {
      console.log('id:', id, typeof id)
      getLists()
    }
  }, [id])

  const getLists = useCallback(async () => {
    console.log('get memeber lists!!')
    try {
      await axios.get(`/api/v1/posts/${Number(id)}/members`, myConfig).then((res) => {
        res.status === 200 ? catchMemberData(res.data) : alert('잘못된 접근입니다!')
      })
    } catch (err) {
      console.error(err)
    }
  }, [id])

  const catchMemberData = (res: any) => {
    console.log('catch res!!', res.members)
    setMembers(res.members)
  }

  const ApplyMember = useCallback(
    async (userId) => {
      console.log(typeof Number(id), userId)
      try {
        await axios.put(`api/v1/posts/${Number(id)}/members/${userId}`, {}, myConfig).then((res) => console.log(res))
      } catch (err) {
        console.error(err)
      }
    },
    [id]
  )

  return (
    <div>
      <Head>
        <title>가입 현황 | wellseecoding</title>
      </Head>
      <JoinHeader text="가입신청 목록" />

      <ul css={Classjoin}>
        {members.length >= 1 ? (
          members.map((v) => (
            <li key={v.userId}>
              <img src="/images/common/joinProfile.svg" alt="프로필사진" />
              <div>
                <h4>{v.name}</h4>
                <p>#개발 매니저(PM)</p>
              </div>
              {v.authorized ? (
                <button type="button" disabled>
                  완료
                </button>
              ) : (
                <button type="button" onClick={() => ApplyMember(v.userId)}>
                  승인
                </button>
              )}
            </li>
          ))
        ) : (
          <div>멤버 없음</div>
        )}
      </ul>
    </div>
  )
}

export default ClassJoinList

const Classjoin = css`
  li {
    padding: 15px 20px;
    display: grid;
    grid-template-columns: 1.3fr 5fr 1fr;
    align-items: center;
    &:nth-of-type(1) {
      margin-top: 10px;
    }
    div {
      margin-left: 1em;
    }
    button {
      padding: 6px 16px;
      border: 1px solid #d3cfcc;
      border-radius: 4px;
      font-size: 1.4rem;
      line-height: 20px;
      letter-spacing: -0.4px;
      color: #444241;
      width: 63px;
    }
    button:disabled {
      color: #444241;
      background-color: #d3cfcc;
    }
    h4 {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 26px;
      letter-spacing: -0.6px;
      color: rgba(0, 0, 0, 0.87);
    }
    p {
      font-size: 1.6rem;
      line-height: 22px;
      letter-spacing: -0.6px;
      color: #ff6e35;
    }
  }
`
