import { Modal } from './styles'

interface onCloseProps {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MoreModal = (props: onCloseProps) => {
  return (
    <div className="modal" css={Modal}>
      <div className="modal__wrap">
        <img src="/images/common/modalDog.svg" alt="안내견" />
        <div className="modal__box">
          <h3>알림을 모두 삭제 하시겠어요?</h3>
          <p>
            내 서랍의 모든 알림이 삭제됩니다. <br />
            삭제된 알림은 다시 복구할 수 없습니다.
          </p>
          <div className="modal__btn">
            <button className="subBtn" onClick={props.onClose}>
              취소
            </button>
            <button className="subBtn delete">삭제</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreModal
