import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Together/Header'
import StudySection from 'components/Together/StudySection'
import WriteButton from 'components/Together/WriteButton'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { useEffect } from 'react'
import { FETCHING_POSTS_REQUEST, RESET_POST_LIST } from 'reducers/posts'

const Write = () => {
  const { posts, post } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   posts.length && console.log('posts:', posts)
  //   post.length && console.log('post:', post)
  // }, [posts, post])

  useEffect(() => {
    !posts.length && loadUser()
  }, [posts])

  useEffect(() => {
    post.length && resetPost()
  }, [post])

  const loadUser = () => {
    console.log('start')
    dispatch({
      type: FETCHING_POSTS_REQUEST,
    })
  }

  const resetPost = () => {
    dispatch({
      type: RESET_POST_LIST,
    })
  }

  return (
    <>
      <TogetherHeader />

      <main css={togetherBoard}>
        <div className="wrap">
          <StudySection title="모각코" data={posts} />
        </div>
      </main>
      <WriteButton />
      <FooterMenu />
    </>
  )
}

export default Write

const togetherBoard = css`
  width: 100%;
  height: 100vh;

  .wrap {
    padding-bottom: 100px;
    background: #ffeee7;
    height: 100%;
  }
`
