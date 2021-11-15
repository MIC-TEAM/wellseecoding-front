import { box } from './style'
import React, { useCallback, useState } from 'react'
import AlarmModal from 'components/AlarmModal'

interface PortfolioProps {
  link: string
  name: string
  description: string
}

const Portfolio = (props: PortfolioProps) => {
  const myInfo = JSON.stringify(localStorage.getItem('access_token'))
  const [confirmModal, setConfirmModal] = useState(false)

  // 이미 가입된 알림 모달 끄기
  const closeModal = useCallback(() => {
    setConfirmModal(false)
  }, [])

  return (
    <section css={box}>
      <h2>포트폴리오</h2>
      <p>
        <img src="/images/common/github.svg" alt="" />
        <span>{props.name}</span>
      </p>

      <a target="_blank" rel="noreferroer noopener noreferrer" href={props.link}>
        {props.link}
      </a>

      <p className="desc">{props.description}</p>

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
          text="아직 포트폴리오를 수정하지 못해요 ㅠㅠ"
          path="/images/alarmModal/checked.svg"
        />
      )}
    </section>
  )
}

export default Portfolio
