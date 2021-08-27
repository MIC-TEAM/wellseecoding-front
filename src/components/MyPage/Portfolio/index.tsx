import { box } from './style'
import Link from 'next/link'

interface PortfolioProps {
  result: string
}

const Portfolio = (props: PortfolioProps) => {
  return (
    <section css={box}>
      <h2>포트폴리오</h2>
      <p>
        <img src="/images/common/github.svg" alt="" />
        깃허브
      </p>
      <Link href="/">
        <a>{props.result}</a>
      </Link>
    </section>
  )
}

export default Portfolio
