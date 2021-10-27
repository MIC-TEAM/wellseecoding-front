/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Modal } from './styles'

interface Props {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  confirmResult: () => void
}

const ConfirmModal = ({ onClose, confirmResult }: Props) => {
  return (
    <div className="modal" css={Modal}>
      <div className="modal__wrap">
        <img src="/images/common/modalDog.svg" alt="안내견" />
        <div className="modal__box">
          <h3>이 모임에 가입하시겠어요?</h3>
          <p>
            모임장에게 가입신청 메시지가 전송됩니다. <br />
            가입신청은 취소할 수 없습니다.
          </p>
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

export default ConfirmModal
