import Link from 'next/link'
import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { myConfig } from 'sagas'
import AlarmModal from 'components/AlarmModal'
import RegisterModal from 'components/RegisterModal'

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
  const router = useRouter()
  // 가입 여부 파악 모달의 상태
  const [confirmModal, setConfirmModal] = useState(false)
  // 가입 여부 파악 결과값
  const [confirmResult, setConfirmResult] = useState(false)

  const [registerSuccess, setRegisterSuccess] = useState(false)
  const [isShowing, setIsShowing] = useState(false)

  // registerSuccess 즉, 가입 로직이 성공적으로 실행됐다면, 새로고침한다
  useEffect(() => {
    if (registerSuccess) router.reload()
  }, [registerSuccess, router])

  // isShowing, 모달이 보여진 상태에서는 scroll을 숨긴다
  useEffect(() => {
    if (isShowing) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [isShowing])

  // 결과값이 true라면, onRegister 함수를 호출한다
  useEffect(() => {
    if (confirmResult) onRegister()
  }, [confirmResult])

  // 가입 신청하는 함수
  const onRegister = useCallback(async () => {
    setConfirmModal(true)
    setConfirmModal(false)
    try {
      await axios
        .post(`/api/v1/posts/${Number(uniqId)}/members`, {}, myConfig)
        .then((res) =>
          res.status === 200 ? toggleModal() : alert('잘못된 접근방법입니다 잠시 후에 다시 시도해주세요')
        )
    } catch (err) {
      console.error(err)
    }
  }, [uniqId, confirmResult])

  // 모달 끄기
  const toggleModal = useCallback(() => {
    setIsShowing((prevState) => !prevState)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setRegisterSuccess(true)
    }, 2000)
  }, [])

  return (
    <>
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
            // 여기서 추가적으로 가입된 모임이라면, 가입하기 대신 가입된 모임 등으로 보여질 수 있는 작업이 필요할듯
            <button className="joinButton" onClick={() => setConfirmModal(true)}>
              가입하기
            </button>
          )}
        </div>
      </nav>
      {confirmModal && (
        <RegisterModal onClose={() => setConfirmModal(false)} confirmResult={() => setConfirmResult(true)} />
      )}
      {isShowing && (
        <AlarmModal
          onClose={toggleModal}
          text="가입 신청이 완료되었어요!"
          textOpt="2초 뒤에 자동으로 종료됩니다"
          path="/images/alarmModal/checked.svg"
        />
      )}
    </>
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
