import { css } from '@emotion/react'
import Link from 'next/link'

const Fnb = () => {
  return (
    <nav css={footerNav}>
      <div css={footerNavWrap}>
        <Link href="/">
          <a>
            <img src="/images/footerNav/menu01.svg" alt="홈" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="/images/footerNav/menu02.svg" alt="함께해요" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="/images/footerNav/menu03.svg" alt="마이페이지" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default Fnb

const footerNav = css`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #fff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.04);
  border-radius: 24px 24px 0px 0px;
  padding: 1em 0;
`
const footerNavWrap = css`
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-around;
`
