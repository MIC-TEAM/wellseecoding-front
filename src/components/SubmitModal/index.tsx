import { Modal } from './styles'

interface Props {
  onClose: () => void
  onSubmit: (e: any) => void
  setLink: (e: any) => void
  link: string
  h3: string
  p1: string
  p2?: string
}

const SubmitModal = ({ onClose, onSubmit, setLink, link, h3, p1, p2 }: Props) => {
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
          <form className="modal__submit" onSubmit={onSubmit}>
            <div>
              <input value={link} placeholder="링크 입력하기" onChange={(e) => setLink(e.target.value)} />
            </div>
          </form>
          <div className="modal__btn">
            <button type="button" className="subBtn" onClick={onClose}>
              취소
            </button>
            <button type="button" className="subBtn delete" onClick={onSubmit}>
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitModal
