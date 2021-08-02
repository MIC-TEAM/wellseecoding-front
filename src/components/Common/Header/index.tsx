import React from 'react'
import useHeader from '../../../hooks/useHeader'
import { container } from './styles'

function Header() {
  const { teamName } = useHeader()

  return <h1 css={container}>{teamName}</h1>
}

export default Header
