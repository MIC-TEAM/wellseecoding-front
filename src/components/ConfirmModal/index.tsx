/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Modal } from './styles'

interface Props {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  confirmResult: () => void
  h3: string
  p1: string
  p2?: string
}

const ConfirmModal = ({ onClose, confirmResult, h3, p1, p2 }: Props) => {
  return (
    <div className="modal" css={Modal}>
      <div className="modal__wrap">
        <img src="/images/common/modalDog.svg" alt="안내견" />
        <div className="modal__box">
          <h3>{h3}</h3>
          <p>
            {p1}
            <br />
            {p2}
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
