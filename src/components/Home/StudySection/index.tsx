import StudySlider from 'components/Together/StudySlider'
import { css } from '@emotion/react'

type dataProps = {
  id: number
  title: string
  schedule: string
  qualification: string
  summary: string
  peopleNum: string
  hashtagArr: string[]
}

// data는 dataProps { } 객체 형식으로 이루어진 배열이다

type Props = {
  title: string
  data: dataProps[]
}

function StudyTitle({ title, data }: Props) {
  return (
    <section style={{ paddingTop: '16px' }}>
      <h2 css={titleStyle} className="together__title">
        {title}
      </h2>

      <StudySlider data={data} />
    </section>
  )
}

export default StudyTitle

const titleStyle = css`
  font-size: 2.2rem;
  color: #262626;
  font-weight: 500;
  margin-top: 22px;
  margin-left: 20px;
  margin-bottom: 16px;
`
