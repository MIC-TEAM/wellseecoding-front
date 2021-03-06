import { css } from '@emotion/react'
import { Common } from 'src/styles/common'

type Props = {
  name: string
  contents: string
}

function FlatBox({ name, contents }: Props) {
  return (
    <div css={FlatWrap}>
      <h3>{name}</h3>
      <p>{contents}</p>
    </div>
  )
}

export default FlatBox

const FlatWrap = css`
  background-color: #fff;
  padding: 21px;
  margin-bottom: 9px;

  h3 {
    font-size: ${Common.fontSize.fs18};
    font-weight: 500;
    margin-bottom: 8px;
  }

  p {
    font-size: ${Common.fontSize.fs16};
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.6px;
  }
`
