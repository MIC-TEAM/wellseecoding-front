import StudySlider from 'src/components/Together/StudySlider'
import { css } from '@emotion/react'
import { PostData } from 'src/types'

function StudySection({ theme, posts }: PostData) {
  return (
    <section>
      <h2 css={titleStyle} className="together__title">
        # {theme} 모임이에요!
      </h2>

      <StudySlider data={posts} />
    </section>
  )
}

export default StudySection

const titleStyle = css`
  font-size: 2.2rem;
  color: #262626;
  font-weight: 500;
  padding: 22px 0px 16px 20px;
`
