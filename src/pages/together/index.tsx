import FooterMenu from 'components/Common/FooterMenu'
import TogetherHeader from 'components/Together/Header'
import StudySection from 'components/Together/StudySection'
import WriteButton from 'components/Together/WriteButton'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { useCallback, useEffect } from 'react'
import { FETCHING_POSTS_REQUEST, RESET_POST_LIST } from 'reducers/posts'
import Loading from 'components/Loading'
import Head from 'next/head'

const Write = () => {
  const { posts, post } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    !posts.length && loadUser()
  }, [posts])

  useEffect(() => {
    post.length && resetPost()
  }, [post])

  const loadUser = useCallback(() => {
    dispatch({
      type: FETCHING_POSTS_REQUEST,
    })
  }, [dispatch])

  const resetPost = useCallback(() => {
    dispatch({
      type: RESET_POST_LIST,
    })
  }, [dispatch])

  return (
    <>
      <Head>
        <title>함께해요 | wellseecoding</title>
      </Head>
      <TogetherHeader />
      <main css={togetherBoard}>
        <div className="wrap">
          {post ? posts.map((p, i) => <StudySection key={i} theme={p.theme} posts={p.posts} />) : <Loading />}
        </div>
      </main>
      <WriteButton />
      <FooterMenu />
    </>
  )
}

export default Write

const togetherBoard = css`
  background: #ffeee7;
  width: 100%;
  height: 91vh;

  @media (max-width: 420px) {
    height: 80vh;
    overflow: scroll;
  }

  .wrap {
    height: 100%;
  }
`
