import StudySlider from 'components/Together/StudySlider'
import { css } from '@emotion/react'
import { PostData } from 'types'

// data는 dataProps { } 객체 형식으로 이루어진 배열이다

function StudySection({ theme, posts }: PostData) {
  return (
    <section style={{ paddingTop: '16px' }}>
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
  margin-top: 22px;
  margin-left: 20px;
  margin-bottom: 16px;
`
