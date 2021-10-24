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
  /* 가입 여부 파악 모달의 상태 */
  const [confirmModal, setConfirmModal] = useState(false)
  /* 가입 여부 파악 결과값 */
  const [confirmResult, setConfirmResult] = useState(false)
  /* 가입 성공 여부 상태 관리 */
  const [registerSuccess, setRegisterSuccess] = useState(false)
  /* 가입 성공 모달 상태 관리 */
  const [registerSuccessModal, setRegisterSuccessModal] = useState(false)

  /* 로컬 스토리지에 저장된 가입된 그룹에 대한 state */
  const [registeredGroup, setRegisteredGroup] = useState<number[]>([])
  /* 해당 게시물이 내가 가입완료된 게시물일 경우를 나타낼 state */
  const [registerDone, setRegisterDone] = useState<boolean>(false)
  /* 이미 가입 완료된 상태에 대한 모달 관리 */
  const [alreadyRegisteredModal, setAlreadyRegisteredModal] = useState(false)

  /* 로컬스토리지에서 'registered'라는 이름을 가진 아이템을 가져온다 (registered는 이미 가입된 그룹) */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('registered') || '[]'
      setRegisteredGroup(JSON.parse(result))
    }
  }, [])

  /* 로컬스토리지에서 state로 registeredGroup을 가져왔을 때 빈 배열이 아니라면, compareRegisteredState 함수를 호출한다 */
  useEffect(() => {
    if (registeredGroup.length) {
      compareRegisteredState()
    }
  }, [registeredGroup])

  /* alreadyRegisteredModal가 true라면 2초 뒤에 종료시킨다 (이미 가입된 모달의 경우 자동 종료하는 기능) */
  useEffect(() => {
    if (alreadyRegisteredModal) {
      setTimeout(() => {
        setAlreadyRegisteredModal(false)
      }, 2000)
    }
  }, [alreadyRegisteredModal])

  /*  registerSuccess 즉, 가입 로직이 성공적으로 실행됐다면, 새로고침한다 */
  useEffect(() => {
    if (registerSuccess) router.reload()
  }, [registerSuccess, router])

  /* isShowing, 모달이 보여진 상태에서는 scroll을 숨긴다 */
  useEffect(() => {
    if (registerSuccessModal) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [registerSuccessModal])

  /* 결과값이 true라면, onRegister 함수를 호출한다 */
  useEffect(() => {
    if (confirmResult) onRegister()
  }, [confirmResult])

  // 기존 로컬 스토리지와 비교하여 로컬 스토리지 내에 배열에 해당 게시물이 있을 경우 좋아요를 한 것으로 표시한다
  const compareRegisteredState = () => {
    for (const x of registeredGroup) {
      if (x === Number(uniqId)) {
        setRegisterDone(true)
        break
      }
    }
  }

  /* 가입 신청하는 함수 */
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

  // 가입 완료 모달 끄기
  const toggleModal = useCallback(() => {
    setRegisterSuccessModal((prevState) => !prevState)
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setRegisterSuccess(true)
    }, 2000)
  }, [])

  // 이미 가입된 알림 모달 끄기
  const closeModal = useCallback(() => {
    setAlreadyRegisteredModal(false)
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
            <>
              {registerDone ? (
                <button className="joinButton" onClick={() => setAlreadyRegisteredModal(true)}>
                  가입하기
                </button>
              ) : (
                <button className="joinButton" onClick={() => setConfirmModal(true)}>
                  가입하기
                </button>
              )}
            </>
          )}
        </div>
      </nav>
      {confirmModal && (
        <RegisterModal onClose={() => setConfirmModal(false)} confirmResult={() => setConfirmResult(true)} />
      )}
      {registerSuccessModal && (
        <AlarmModal
          onClose={toggleModal}
          text="가입 신청이 완료되었어요!"
          textOpt="2초 뒤에 자동으로 종료됩니다"
          path="/images/alarmModal/checked.svg"
        />
      )}
      {alreadyRegisteredModal && (
        <AlarmModal
          onClose={closeModal}
          text="이미 가입 신청한 모임이에요"
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
