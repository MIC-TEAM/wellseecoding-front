import Link from 'next/link'
import { css } from '@emotion/react'
import { useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { myConfig } from 'sagas'

export type props = {
  commentCount: number
  // 게시글의 고유 id
  uniqId: string | string[] | undefined
  // 로컬 스토리지에 저장된 내 id
  localId?: number | null
  // post로부터 불러오는 id
  userId?: number
}

function PostFooter({ commentCount, uniqId, localId, userId }: props) {
  useEffect(() => {
    console.log('localId:', localId, 'userId:', userId)
  }, [localId, userId])

  const router = useRouter()

  const onRegister = useCallback(async () => {
    const result = window.confirm('정말로 가입하시겠습니까?')
    console.log(uniqId, typeof uniqId)
    if (result) {
      try {
        await axios
          .post(`/api/v1/posts/${Number(uniqId)}/members`, {}, myConfig)
          .then((res) =>
            res.status === 200 ? catchState(res, uniqId) : alert('잘못된 접근방법입니다 잠시 후에 다시 시도해주세요')
          )
      } catch (err) {
        console.error(err)
      }
    }
  }, [uniqId])

  const catchState = (response: any, id: any) => {
    console.log('response:', response)
    console.log(`${id} 번 게시글에 대한 가입신청이 완료되었습니다.`)
  }

  return (
    <nav css={footerNav}>
      <div css={footerNavWrap}>
        <Link href={`/posts/comment/${Number(uniqId)}`}>
          <a>
            <img src="/images/post/comment.svg" alt="댓글 달기" />
            <span>{commentCount}</span>
          </a>
        </Link>
        {localId === userId ? (
          <button
            className="joinButton"
            onClick={() => router.push(`/class_join_list/${uniqId}`).then(() => window.scrollTo(0, 0))}
          >
            가입현황
          </button>
        ) : (
          <button className="joinButton" onClick={() => onRegister()}>
            가입하기
          </button>
        )}
      </div>
    </nav>
  )
}

export default PostFooter

const footerNav = css`
  position: sticky;
  width: 100%;
  left: 0;
  bottom: 0px;
  z-index: 10;
  background: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 24px 24px 0px 0px;
  padding: 14px 0;
`
const footerNavWrap = css`
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    margin-right: 9px;
  }
  span {
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.4px;
    color: #444241;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
    color: #b6b2b0;
    font-weight: 500;
    line-height: 1.5rem;
    margin-top: 0.5em;
  }

  .joinButton {
    background-color: #ff6e35;
    border-radius: 16px;
    width: 59.2%;
    padding: 16px 0;
    color: white;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
`
