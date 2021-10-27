/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Modal } from './styles'

interface Props {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  confirmResult: () => void
}

const RegisterModal = ({ onClose, confirmResult }: Props) => {
  return (
    <div className="modal" css={Modal}>
      <div className="modal__wrap">
        <img src="/images/common/modalDog.svg" alt="안내견" />
        <div className="modal__box">
          <h3>알림을 모두 읽기 처리 하시겠어요?</h3>
          <p>읽음 처리된 알림은 읽기 이전 상태로 되돌릴 수 없습니다</p>
          <div className="modal__btn">
            <button className="subBtn" onClick={onClose}>
              취소
            </button>
            <button className="subBtn delete" onClick={confirmResult}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
