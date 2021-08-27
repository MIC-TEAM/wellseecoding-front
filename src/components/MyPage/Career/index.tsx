import { box } from './style'

interface CareerProps {
  totalYear: string
  company: string
  job: string
  year: string
}

const Career = (props: CareerProps) => {
  return (
    <section css={box}>
      <h2>
        경력 <strong>{props.totalYear}</strong>
      </h2>

      {/* 회사이름 */}
      <p className="company">{props.company}</p>
      {/* 직업군 | 기술스택 년도 */}
      <p className="desc">
        {props.job} | 기술스택 | {props.year}
      </p>
    </section>
  )
}

export default Career
