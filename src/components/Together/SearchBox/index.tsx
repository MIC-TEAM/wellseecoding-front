import Link from 'next/link'
import { studyContentBox } from './style'

type Props = {
  id: number
  listTitle: string
  hashTag: string[]
}
function StudyBox({ id, listTitle, hashTag }: Props) {
  return (
    <li css={studyContentBox}>
      <Link href={`/posts/${id}`}>
        <a>
          <article>
            <h3>{listTitle}</h3>
            {hashTag ? hashTag.map((v, i) => <p key={i}>#{v}</p>) : <span></span>}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default StudyBox
