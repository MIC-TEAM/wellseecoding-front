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
        <StudySection title="모각코" />
        <StudySection title="스터디" />
        <StudySection title="토이 프로젝트" />
      </main>
      <WriteButton />
      <FooterMenu />
    </>
  )
}

export default Write

const togetherBoard = css`
  position: absolute;
  width: 100%;
  left: 0;
  background: #ffeee7;
  height: 100vh;
  margin-top: 18px;
  section {
    &:last-of-type {
      padding-bottom: 10em;
    }
  }
`
