import { box } from './style'
import React, { useCallback, useState } from 'react'
import AlarmModal from 'src/components/AlarmModal'

interface CareerProps {
  company: string
  job: string
  year: number
}

const Career = (props: CareerProps) => {
  const myInfo = JSON.stringify(localStorage.getItem('access_token'))
  const [confirmModal, setConfirmModal] = useState(false)

  // 이미 가입된 알림 모달 끄기
  const closeModal = useCallback(() => {
    setConfirmModal(false)
  }, [])
  return (
    <section css={box}>
      <h2>
        경력 <strong>총 {props.year}년차</strong>
      </h2>

      {/* 회사이름 */}
      <p className="company">{props.company}</p>
      {/* 직업군 | 기술스택 년도 */}
      <p className="desc">
        기술스택 | {props.job} | 경력 | {props.year}년차
      </p>

      {myInfo ? (
        <button type="button" onClick={() => setConfirmModal(true)}>
          <img src="/images/common/update.svg" alt="수정버튼" />
        </button>
      ) : (
        <div></div>
      )}
      {confirmModal && (
        <AlarmModal
          onClose={closeModal}
          text="아직 경력을 수정하지 못해요 ㅠㅠ"
          path="/images/alarmModal/checked.svg"
        />
      )}
    </section>
  )
}

export default Career
