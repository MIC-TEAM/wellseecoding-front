import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Together/Header'
import StudySection from 'components/Together/StudySection'
import WriteButton from 'components/Together/WriteButton'
import { css } from '@emotion/react'

const Write = () => {
  return (
    <>
      <TogetherHeader />

      <main css={togetherBoard}>
        <div className="wrap">
          <StudySection title="모각코" />
          <StudySection title="스터디" />
          <StudySection title="토이 프로젝트" />
        </div>
      </main>
      <WriteButton />
      <FooterMenu />
    </>
  )
}

export default Write

const togetherBoard = css`
  width: 100%;
  height: 100vh;
  .wrap {
    padding-bottom: 100px;
    background: #ffeee7;
  }
`