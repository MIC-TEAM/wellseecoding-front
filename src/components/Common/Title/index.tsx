import { titleStyle } from './styled'

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
