import Link from 'next/link'
import { footerNav, footerNavWrap } from './styled'

const FooterMenu = () => {
  return (
    <nav css={footerNav}>
      <div css={footerNavWrap}>
        <Link href="/">
          <a>
            <img src="/images/footerMenu/menu01.svg" alt="홈" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="/images/footerMenu/menu02.svg" alt="함께해요" />
          </a>
        </Link>

        <Link href="/">
          <a>
            <img src="/images/footerMenu/menu03.svg" alt="마이페이지" />
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default FooterMenu
