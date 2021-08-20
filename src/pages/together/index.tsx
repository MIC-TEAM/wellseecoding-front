import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Together/Header'
import StudyBox from 'components/Together/StudySection'
import WriteButton from 'components/Together/WriteButton'
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
      <WriteButton />
      <FooterMenu />
    </>
  )
}

export default Write
