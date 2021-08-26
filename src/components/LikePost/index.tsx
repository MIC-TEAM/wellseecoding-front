import { css } from '@emotion/react'

interface Props {
  title: string
  name: string
  date: number
}

function LikePostList({ title, name, date }: Props) {
  return (
    <li css={list}>
      <h3>{title}</h3>
      <div>
        <h5>{name}</h5> | <span>{date}</span>
      </div>
    </li>
  )
}

export default LikePostList

const list = css`
  border-bottom: 1px solid #d3cfcc;
  padding: 20px 0;
  h3 {
    font-size: 1.6rem;
    line-height: 22px;
    letter-spacing: -0.6px;
    color: #262626;
  }
  div {
    margin-top: 4px;
    font-size: 1.6rem;
    line-height: 22px;
    letter-spacing: -0.6px;
    color: rgba(131, 131, 131, 0.87);
    display: flex;
  }
  h5 {
    margin-right: 0.5rem;
  }
  span {
    margin-left: 0.5rem;
  }
`
