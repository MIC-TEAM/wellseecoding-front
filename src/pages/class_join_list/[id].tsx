import { css } from '@emotion/react'
import JoinHeader from 'components/Common/Header/Back'
import WellseeError from 'components/Common/wellseeError'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { ACCEPT_MEMBER_REQUEST, FETCH_MEMBERS_REQUEST } from 'reducers/posts'

const ClassJoinList = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()

  const { members, acceptMemberSuccess } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    if (id && !members.length) {
      getLists()
    }
  }, [id])

  useEffect(() => {
    if (acceptMemberSuccess) router.reload()
  }, [router, acceptMemberSuccess])

  const getLists = useCallback(async () => {
    dispatch({
      type: FETCH_MEMBERS_REQUEST,
      data: Number(id),
    })
  }, [dispatch, id])

  const ApplyMember = useCallback(
    async (userId) => {
      const result = window.confirm('해당 유저의 가입을 승인하시겠습니까?')
      if (result) {
        dispatch({
          type: ACCEPT_MEMBER_REQUEST,
          data: {
            id: Number(id),
            userId: userId,
          },
        })
      }
    },
    [dispatch, id]
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
          <WellseeError text={'아직 가입신청한 인원이 없어요...'} />
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
