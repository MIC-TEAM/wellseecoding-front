import { css } from '@emotion/react'
import { Common } from 'styles/common'

type Props = {
  content: string
}

function HashWrap({ content }: Props) {
  return <div css={hashWrap}>#{content}</div>
}

export default HashWrap

const hashWrap = css`
  background: #ffeee7;
  border-radius: 56px;
  padding: 8px 12px;
  color: #ff6e35;
  display: inline-block;
  font-weight: bold;
  font-size: ${Common.fontSize.fs14};
  line-height: 20px;
  margin-right: 4px;
  margin-top: 4px;
`
