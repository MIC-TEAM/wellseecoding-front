/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
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
      <button type="button" onClick={() => router.back()}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
      </button>
      <span>{title ? title : ''}</span>
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
  padding: 0 20px;
  width: 100%;
  text-align: left;
  position: sticky;
  display: flex;
  top: 0;
  background: #fff;
  align-items: center;
  z-index: 9999;
  border-bottom: 1px solid #d3cfcc;

  & span {
    font-size: ${Common.fontSize.fs20};
    letter-spacing: -0.4px; // 폰트 자간 너비
    font-weight: 500; // 폰트 굵기
    line-height: 28px; // 폰트 높이 너비
    margin-left: -20px; //  position: relative; & left: -20px; 대체값
  }

  & div {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;

    & button {
      align-items: center;

      & img {
        margin-right: 20px;
      }
    }
  }
`
