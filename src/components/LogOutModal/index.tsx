import { useCallback } from 'react'
import { Modal } from './styles'

interface onCloseProps {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MoreModal = (props: onCloseProps) => {
  const logOut = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
      eraseCookie('access_token')
      props.onClose
      location.replace('/sign_in/auth_start')
    }
  }, [])

  function eraseCookie(name: string) {
    document.cookie = name + '=; Max-Age=0'
  }
  return (
    <div className="modal" css={Modal}>
      <div className="modal__wrap">
        <img src="/images/common/modalDog.svg" alt="안내견" />
        <div className="modal__box">
          <h3>로그아웃</h3>
          <p>
            아직 다양한 모임들이 참여를 기다리고 있어요!
            <br />
            그래도 로그아웃 하시겠어요?
          </p>
          <div className="modal__btn">
            <button className="subBtn" onClick={props.onClose}>
              취소
            </button>
            <button className="subBtn delete" onClick={logOut}>
              로그아웃
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreModal
