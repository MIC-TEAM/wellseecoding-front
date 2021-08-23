import React from 'react'
import { css } from '@emotion/react'
import { Common } from 'styles/common'

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

const FlatWrap = css`
  background-color: white;
  padding: 21px 22px;
  margin-bottom: 9px;

  & h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
  }

  & p {
    font-family: 'Spoqa Han Sans Neo';
    font-size: ${Common.fontSize.fs16};
    font-weight: 700;
    letter-spacing: -0.6px;
    text-align: justify;
  }
`

export default FlatBox
