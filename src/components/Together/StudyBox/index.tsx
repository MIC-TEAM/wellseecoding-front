import Link from 'next/link'
import { studyContentBox } from './style'

type Props = {
  key: number
  listTitle: string
  hashtagArr: string[]
}
function StudyBox({ listTitle, hashtagArr }: Props) {
  return (
    <li css={studyContentBox}>
      <Link href="/">
        <a>
          <article>
            <h3>{listTitle}</h3>
            {hashtagArr.map((v, i) => (
              <p key={i}>#{v}</p>
            ))}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default StudyBox
