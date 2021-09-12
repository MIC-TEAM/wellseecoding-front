import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Together/Header'
import StudySection from 'components/Together/StudySection'
import WriteButton from 'components/Together/WriteButton'
import { css } from '@emotion/react'
import { studyArr1, studyArr2, studyArr3 } from 'apis/dummyData'

const Write = () => {
  return (
    <>
      <TogetherHeader />

      <main css={togetherBoard}>
        <div className="wrap">
          <StudySection title="모각코" data={studyArr1} />
          <StudySection title="스터디" data={studyArr2} />
          <StudySection title="토이 프로젝트" data={studyArr3} />
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
    height: 100%;
  }
`
