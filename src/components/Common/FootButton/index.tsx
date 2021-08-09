import { ButtonHTMLAttributes } from 'react'
import { container } from './style'

export enum FootButtonType {
  DISABLE = 'disable',
  ACTIVATION = 'activation',
  SKIP = 'skip',
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  footButtonType: FootButtonType
}

function FootButton({ children, type, footButtonType, ...props }: IProps) {
  return (
    <button
      type={type}
      css={container}
      className={footButtonType}
      disabled={footButtonType === FootButtonType.DISABLE}
      {...props}
    >
      {children}
    </button>
  )
}

export default FootButton
