import StudyBox from 'components/Together/StudyBox'
import { studyContentList, studyContentListWrap } from './style'

type dataProps = {
  id: number
  title: string
  schedule: string
  qualification: string
  summary: string
  peopleNum: string
  hashtagArr: string[]
}

type Props = {
  data: dataProps[]
}

function StudySlider({ data }: Props) {
  return (
    <div css={studyContentListWrap}>
      <ul css={studyContentList}>
        {data?.map((s) => (
          <StudyBox key={s.id} listTitle={s.title} hashtagArr={s.hashtagArr} />
        ))}
      </ul>
    </div>
  )
}

export default StudySlider
