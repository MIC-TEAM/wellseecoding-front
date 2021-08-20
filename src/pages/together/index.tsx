import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Common/Together/Header'
import StudyBox from 'components/Common/Together/StudySection'
import { togetherBoard } from './style'

const Write = () => {
  return (
    <>
      <TogetherHeader />

      <main css={togetherBoard}>
        <StudyBox title="모각코" />
        <StudyBox title="스터디" />
        <StudyBox title="토이 프로젝트" />
      </main>

      <FooterMenu />
    </>
  )
}

export default Write
