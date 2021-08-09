import { bigTitleStyle } from './styled'

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
