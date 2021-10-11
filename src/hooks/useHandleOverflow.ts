export default function usehandleOverFlow() {
  function hidden() {
    const x = document.getElementsByTagName('BODY')[0] as HTMLStyleElement
    x.style.overflow = 'hidden'
  }

  function show() {
    const x = document.getElementsByTagName('BODY')[0] as HTMLStyleElement
    x.style.overflow = 'auto'
  }

  function modalShow() {
    const x = document.getElementsByClassName('css-qxiuy7-togetherBoard')[0] as HTMLStyleElement
    x.style.height = '100%'
    x.style.overflow = 'scroll'
  }

  return { hidden, show, modalShow }
}

/* 
SearchModal이 모달 형식을 띄고 있기 때문에 반응형으로 넘어갈 시에 스크롤이 두 개가 생기는 현상을 발견하였습니다.
이를 컨트롤하기 위해서 최상위 태그인 body에 접근하여 overflow를 제어할 수 있도록 만들었습니다.
*/
