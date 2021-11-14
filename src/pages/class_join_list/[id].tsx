import { css } from '@emotion/react'
import axios from 'axios'
import JoinHeader from 'components/Common/Header/Back'
import WellseeError from 'components/Common/wellseeError'
import SubmitModal from 'components/SubmitModal'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { ACCEPT_MEMBER_REQUEST, FETCH_MEMBERS_REQUEST } from 'reducers/posts'

const ClassJoinList = () => {
  const router = useRouter()
  const { id } = router.query

  const [makeLinkModal, setMakeLinkModal] = useState<boolean>(false)
  const [link, setLink] = useState<string>('')

  const [prevLink, setPrevLink] = useState<string>('')

  const { members } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
  }, [])

  useEffect(() => {
    if (id && !members.length) {
      getLists()
      getLink(id)
    }
  }, [id])

  const getLink = useCallback(async (id) => {
    try {
      await axios.get(`api/v1/posts/${id}/link`).then((res) => setPrevLink(res.data.link))
    } catch (err) {
      console.error(err)
    }
  }, [])

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

  const onClose = useCallback(() => {
    setMakeLinkModal(false)
    setLink('')
  }, [])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      await axios
        .put(`api/v1/posts/${id}/link`, {
          link: prevLink,
        })
        .then((res) => {
          if (res.status === 200) {
            setLink('')
            setMakeLinkModal(false)
          } else {
            console.error('에러 발생')
          }
        })
    },
    [prevLink, id]
  )

  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>가입 현황 | wellseecoding</title>
        <meta name="description" content="가입 현황을 볼 수 있는 페이지입니다." />
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
          <WellseeError text={'가입신청한 인원이 없어요...'} />
        )}
      </ul>
      <div style={{ padding: '10px 20px' }}>
        <div css={linkBtn}>
          <button onClick={() => setMakeLinkModal(true)}>모임링크 만들기</button>
        </div>
      </div>

      {makeLinkModal && (
        <SubmitModal
          prevLink={prevLink}
          setPrevLink={setPrevLink}
          onClose={onClose}
          onSubmit={onSubmit}
          setLink={setLink}
          link={link}
          h3={'모임 링크를 만들어 볼까요?'}
          p1={'오픈 카카오톡, 슬랙 등 링크를 적어주세요!'}
        />
      )}
    </div>
  )
}

export default ClassJoinList

const Classjoin = css`
  @media (max-width: 420px) {
    height: 80% !important;
  }
  @media (max-height: 800px) {
    height: 84%;
  }
  height: 87%;

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
const linkBtn = css`
  background-color: #ff6e35;
  border-radius: 16px;
  width: 100%;

  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: 500;

  button {
    padding: 16px 0;
    width: 100%;
    height: 100%;
  }
`
