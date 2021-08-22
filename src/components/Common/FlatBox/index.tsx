import React from 'react'
import { css } from '@emotion/react'

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
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6000000238418579px;
    text-align: justify;
  }
`

export default FlatBox
