import Link from 'next/link'
import { studyContentBox } from './style'

type Props = {
  listTitle: string
  hashTag: string
}
function StudyBox({ listTitle, hashTag }: Props) {
  return (
    <li css={studyContentBox}>
      <Link href={`/posts/308`}>
        <a>
          <article>
            <h3>{listTitle}</h3>
            <p>#{hashTag}</p>
          </article>
        </a>
      </Link>
    </li>
  )
}

export default StudyBox
