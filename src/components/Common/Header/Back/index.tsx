import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Common } from 'src/styles/common'
/* 웹팩 설정을 통해 pre-render 담당 */
// import BackSvg from '/public/images/header/back.svg'

type Props = {
  text: string
}

function Back({ text }: Props) {
  const router = useRouter()

  return (
    <header css={backHeader}>
      <button type="button" onClick={() => router.back()}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
      </button>
      <h1>{text}</h1>
    </header>
  )
}

export default Back

Back.defaultProps = {
  text: '',
}

const backHeader = css`
  width: 100%;
  text-align: left;
  background: #fff;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: 500;
    font-size: ${Common.fontSize.fs20};
    line-height: 28px;
    letter-spacing: -0.4px;
    color: #262626;
    margin-left: -30px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
