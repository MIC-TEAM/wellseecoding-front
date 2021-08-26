import StudyBox from 'components/Together/StudyBox'
import { studyContentList, studyContentListWrap } from './style'

function StudySlider() {
  return (
    <div css={studyContentListWrap}>
      <ul css={studyContentList}>
        <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
        <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
        <StudyBox listTitle="[서울] 같이 모각코 할 사람" hashTag="Spring" />
      </ul>
    </div>
  )
}

export default StudySlider
