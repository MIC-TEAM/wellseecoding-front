/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Common } from 'styles/common'

type Props = {
  title: string | null
  optional: boolean
}

function BackOptional({ title, optional }: Props) {
  const router = useRouter()

  return (
    <header css={backHeader}>
      <button type="button" className="back" onClick={() => router.back()}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
      </button>
      <h1>{title ? title : ''}</h1>
      {optional && (
        <div>
          <button type="button">
            <img src="/images/header/heart.svg" alt="좋아요" onClick={() => alert('좋아요')} />
          </button>
          <button type="button">
            <img src="/images/header/setting.svg" alt="환경설정" onClick={() => alert('환경설정')} />
          </button>
        </div>
      )}
    </header>
  )
}

export default BackOptional

const backHeader = css`
  width: 100%;
  text-align: left;
  position: sticky;
  left: 0;
  display: flex;
  top: 0;
  background: #fff;
  align-items: center;
  z-index: 9999;
  border-bottom: 1px solid #d3cfcc;
  .back {
    padding-left: 20px;
  }
  h1 {
    font-size: ${Common.fontSize.fs20};
    letter-spacing: -0.4px;
    font-weight: 500;
    line-height: 28px;
    margin-left: -20px;
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    button {
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
  }
`
