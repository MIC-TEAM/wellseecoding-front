import { css } from '@emotion/react'
import { Common } from 'styles/common'

type Props = {
  title: string
  className: string
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
  margin-top: 2.3em;
  padding-left: 20px;
  .loginMt {
    margin-top: 3.7em;
  }
`
