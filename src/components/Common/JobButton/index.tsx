import { css } from '@emotion/react'

type Props = {
  job_text: string
}

function JobButton({ job_text }: Props) {
  return (
    <button type="button" css={hashTag}>
      <p>#{job_text}</p>
    </button>
  )
}

export default JobButton

const hashTag = css`
  background: #ffffff;
  border: 1px solid #d3cfcc;
  color: #d3cfcc;
  border-radius: 60px;
  display: inline-block;
  padding: 10px 14px;
  margin-top: 14px;
  margin-right: 8px;
  &:focus {
    border: 1px solid #ff6e35;
    color: #ff6e35;
  }
  p {
    font-size: 1.6rem;
  }
`
