import useHeader from 'src/hooks/useHeader'
import { css } from '@emotion/react'

function Header() {
  const { teamName } = useHeader()

  return <h1 css={container}>{teamName}</h1>
}

export default Header

const container = css`
  margin: 15px 0;
  text-align: center;
  font-size: 20px;
`
