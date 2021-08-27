import { box } from './style'
import Link from 'next/link'

interface LikeProps {
  likepost: string
}

const LikePost = (props: LikeProps) => {
  return (
    <section css={box}>
      <div className="top">
        <h2>좋아요한 게시글</h2>
        <Link href="/like_post">
          <a>더보기</a>
        </Link>
      </div>

      <ul>
        <li>{props.likepost}</li>
        <li>{props.likepost}</li>
        <li>{props.likepost}</li>
      </ul>
    </section>
  )
}

export default LikePost
