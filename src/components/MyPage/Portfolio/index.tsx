import { box } from './style'
import Link from 'next/link'

interface PortfolioProps {
  link: string
  name: string
  description: string
}

const Portfolio = (props: PortfolioProps) => {
  return (
    <section css={box}>
      <h2>포트폴리오</h2>
      <p>
        <img src="/images/common/github.svg" alt="" />
        <span>{props.name}</span>
      </p>
      <Link href={props.link}>
        <a target="_blank" rel="noreferroer noopener">
          {props.link}
        </a>
      </Link>
      <p className="desc">{props.description}</p>

      <button type="button">
        <img src="/images/common/update.svg" alt="수정버튼" />
      </button>
    </section>
  )
}

export default Portfolio
