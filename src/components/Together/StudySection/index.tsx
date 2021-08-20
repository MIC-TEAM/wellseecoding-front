import StudyBox from '../StudyBox'
import { studyContentList, studyContentListWrap } from './style'

type Props = {
  title: string
}
function StudySection({ title }: Props) {
  return (
    <section>
      <h2>#{title} 모임이에요!</h2>

      <div css={studyContentListWrap}>
        <ul css={studyContentList}>
          <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
          <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
          <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
        </ul>
      </div>
    </section>
  )
}

export default StudySection
