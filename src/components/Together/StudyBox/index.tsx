import Link from 'next/link'
import { useEffect, useState } from 'react'
import { studyContentBox } from './style'

type Props = {
  key: number
  uniq: number
  listTitle: string
  tags: []
}
function StudyBox({ uniq, listTitle, tags }: Props) {
  const [maxtags, setMaxtags] = useState<string[]>(tags)

  useEffect(() => {
    if (tags.length >= 3) {
      setMaxtags(tags.slice(0, 4))
    }
  }, [tags])

  return (
    <li css={studyContentBox}>
      <Link href={`/posts/${uniq}`}>
        <a>
          <article>
            <h3>{listTitle}</h3>
            {maxtags?.map((v, i) => (
              <p key={i}>#{v}</p>
            ))}
          </article>
        </a>
      </Link>
    </li>
  )
}

export default StudyBox
