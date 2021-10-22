/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Modal } from './styles'

interface onCloseProps {
  onClose: (event: React.MouseEvent) => void
  path: string
  text?: string
}

const AlarmModal = ({ onClose, path, text }: onCloseProps) => {
  return (
    <div className="modal" css={Modal} onClick={onClose}>
      <div className="modal__wrap">
        <div className="modal__box">
          <img src={path} alt="체크" />
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  )
}

export default AlarmModal
