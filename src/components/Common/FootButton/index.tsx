import { css } from '@emotion/react'
import { ButtonHTMLAttributes } from 'react'
import { Common } from '../../../styles/common'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  firstText: string
  secondText: string
  className?: string
  className1?: string
  className2?: string
}

function FootButton({ firstText, secondText, className, className1, className2 }: Props) {
  return (
    <div css={footBtn} className={className}>
      <div className="footBtnWrap">
        <button type="button" className={className1}>
          {firstText}
        </button>

        <button type="button" className={className2}>
          {secondText}
        </button>
      </div>
    </div>
  )
}

export default FootButton

const footBtn = css`
  width: 100%;
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  display: block;
  &.oneBtn {
    button {
      &:nth-of-type(2) {
        display: none;
      }
    }
  }
  .footBtnWrap {
    padding: 0 20px;
    button {
      width: 100%;
      border-radius: 16px;
      padding: 16px 0;
      color: #ffffff;
      background: ${Common.colors.gray04};
      font-size: ${Common.fontSize.fs18};
      &.orangeBtn {
        background: #ff6e35;
      }
      &.whiteBtn {
        background: #ffffff;
        border: 1px solid #ff6e35;
        color: ${Common.colors.black};
      }
      &:nth-of-type(1) {
        margin-bottom: 12px;
      }
    }
  }
`
