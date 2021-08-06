import React from 'react'
import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

type Props = {
  title: string
}

export default function Title({ title }: Props) {
  return <h1 css={titleStyle}>{title}</h1>
}

const titleStyle = css`
  font-size: ${Common.fontSize.title};
  font-weight: 500;
  color: ${Common.colors.black};
  margin-top: 3.3em;
`
