import { css } from '@emotion/react'
import { Common } from 'src/styles/common'

type Props = {
  title: string
  className?: string
}

export default function Title({ title, className }: Props) {
  return (
    <h1 css={titleStyle} className={className}>
      {title}
    </h1>
  )
}

const titleStyle = css`
  font-size: ${Common.fontSize.title};
  font-weight: 500;
  color: ${Common.colors.black};
  padding-left: 20px;
  padding-top: 3.7em;
`
