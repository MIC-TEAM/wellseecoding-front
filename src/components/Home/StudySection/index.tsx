import StudySlider from 'components/Together/StudySlider'
import { css } from '@emotion/react'

type Props = {
  title: string
}
function StudyTitle({ title }: Props) {
  return (
    <section>
      <h2 css={titleStyle} className="together__title">
        {title}
      </h2>

      <StudySlider />
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
