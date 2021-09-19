import Link from 'next/link'
import { studyContentBox } from './style'

type Props = {
  key: number
  uniq: number
  listTitle: string
  tags: []
}
function StudyBox({ uniq, listTitle, tags }: Props) {
  return (
    <li css={studyContentBox}>
      <Link href={`/posts/${uniq}`}>
        <a>
          <article>
            <h3>{listTitle}</h3>
            {tags?.map((v, i) => (
              <p key={i}>#{v}</p>
            ))}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default StudyBox
