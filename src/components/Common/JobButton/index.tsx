import { hashTag } from './style'

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
