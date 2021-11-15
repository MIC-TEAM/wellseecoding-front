import StudyBox from 'src/components/Together/StudyBox'
import { PostType } from 'src/types'
import { studyContentBox } from '../StudyBox/style'
import { studyContentList, studyContentListWrap } from './style'

type Props = {
  theme?: string
  data?: PostType[]
}

function StudySlider({ theme, data }: Props) {
  return (
    <div css={studyContentListWrap}>
      <ul css={studyContentList}>
        {data ? (
          data.map((s) => <StudyBox key={s.id} uniq={s.id} listTitle={s.name} tags={s.tags} />)
        ) : (
          <>
            <li css={studyContentBox}>
              <a>
                <article>
                  <h3>아직 {theme} 모임이 없어요</h3>
                </article>
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default StudySlider
