import Back from 'components/Common/Header/Back'
import LikePostList from 'components/LikePost'
import { css } from '@emotion/react'

const LikePost = () => {
  return (
    <div>
      <Back />

      <main css={likePostListBox}>
        <h1>좋아요한 게시글</h1>

        <ul>
          <LikePostList title="[서울] 취업용 프로젝트 같이하실 분  모집합니다." name="작성자명" date={20210821} />
          <LikePostList title="[서울] 취업용 프로젝트 같이하실 분  모집합니다." name="작성자명" date={20210821} />
          <LikePostList title="[서울] 취업용 프로젝트 같이하실 분  모집합니다." name="작성자명" date={20210821} />
          <LikePostList title="[서울] 취업용 프로젝트 같이하실 분  모집합니다." name="작성자명" date={20210821} />
        </ul>
      </main>
    </div>
  )
}

export default LikePost

const likePostListBox = css`
  padding: 0 20px;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    line-height: 24px;
    letter-spacing: -1px;
    color: #262626;
    margin-top: 9px;
    margin-bottom: 20px;
  }
`
