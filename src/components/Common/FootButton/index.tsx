import { ButtonHTMLAttributes } from 'react'
import { footBtn } from './styled'

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
