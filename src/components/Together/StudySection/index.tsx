import StudySlider from 'components/Together/StudySlider'
import { css } from '@emotion/react'

type Props = {
  title: string
}
function StudySection({ title }: Props) {
  return (
    <section style={{ paddingTop: '16px' }}>
      <h2 css={titleStyle} className="together__title">
        #{title} 모임이에요!
      </h2>

      <StudySlider />
    </section>
  )
}

export default StudySection

const titleStyle = css`
  font-size: 2.2rem;
  color: #262626;
  font-weight: 500;
  margin-top: 22px;
  margin-left: 20px;
  margin-bottom: 16px;
`
