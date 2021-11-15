import { css } from '@emotion/react'
import { Common } from 'src/styles/common'
// import Logo from 'public/images/login/character_color.svg'

type Props = {
  title: string
}

export default function BigTitle({ title }: Props) {
  return (
    <>
      <img src="/images/login/character_color.svg" alt="웰시코딩 로고" />
      <h1 css={bigTitleStyle}>{title}</h1>
    </>
  )
}

const bigTitleStyle = css`
  font-size: ${Common.fontSize.bigTitle};
  font-weight: 500;
  color: ${Common.colors.black};
  margin-top: 27px;
`
