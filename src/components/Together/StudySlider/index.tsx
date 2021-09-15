import StudyBox from 'components/Together/StudyBox'
import { PostType } from 'types'
import { studyContentList, studyContentListWrap } from './style'

type Props = {
  data: PostType[]
}

function StudySlider({ data }: Props) {
  return (
    <div css={studyContentListWrap}>
      <ul css={studyContentList}>
        {data?.map((s) => (
          <StudyBox key={s.id} uniq={s.id} listTitle={s.name} />
        ))}
      </ul>
    </div>
  )
}

export default StudySlider
