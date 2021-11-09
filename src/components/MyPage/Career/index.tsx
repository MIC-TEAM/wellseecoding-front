import { box } from './style'

interface CareerProps {
  company: string
  job: string
  year: number
}

const Career = (props: CareerProps) => {
  const myInfo = JSON.stringify(localStorage.getItem('access_token'))
  const year = [props.year]
  const totalYear = year.concat(props.year)
  const sumYear = totalYear.reduce((a, b) => a + b)

  return (
    <section css={box}>
      <h2>
        경력 <strong>총 {sumYear}년차</strong>
      </h2>

      {/* 회사이름 */}
      <p className="company">{props.company}</p>
      {/* 직업군 | 기술스택 년도 */}
      <p className="desc">
        기술스택 | {props.job} | 경력 | {props.year}년차
      </p>

      {myInfo ? (
        <button type="button">
          <img src="/images/common/update.svg" alt="수정버튼" />
        </button>
      ) : (
        <div></div>
      )}
    </section>
  )
}

export default Career
