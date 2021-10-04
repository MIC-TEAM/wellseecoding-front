import FooterMenu from 'components/Common/FooterMenu'
import HomeHeader from 'components/Home/Header'
import HomeMain from 'components/Home/Main'
import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCHING_POSTS_REQUEST, RESET_POST_LIST } from 'reducers/posts'
import { RootState } from 'reducers'
// import StudySection from 'components/Together/StudySection'

const Home = () => {
  const { posts, post } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()
  const [name, setName] = useState<string | null>(null)

  useEffect(() => {
    localStorage.getItem('id') && getUserName()
  })

  useEffect(() => {
    !posts.length && loadUser()
  }, [])

  useEffect(() => {
    post.length && resetPost()
  }, [post])

  const loadUser = useCallback(() => {
    dispatch({
      type: FETCHING_POSTS_REQUEST,
    })
  }, [dispatch])

  const resetPost = () => {
    dispatch({
      type: RESET_POST_LIST,
    })
  }

  const getUserName = useCallback(() => {
    const myname = localStorage.getItem('userName')
    setName(myname)
  }, [])

  return (
    <>
      <HomeHeader />

      <div css={wrap}>
        <HomeMain user={name} num={4} />
        <div className="listWrap">
          <main css={ClassListWrap}>
            {/* <StudySection theme="내가 개설한 모임" posts={posts} />
            <StudySection theme="가입 신청한 모임" posts={posts} />
            <StudySection theme="가입 승인된 모임" posts={posts} /> */}
          </main>
        </div>
      </div>

      <FooterMenu />
    </>
  )
}

export default Home

const wrap = css`
  .listWrap {
    background: #ffeee7;
    padding-bottom: 100px;
  }
`

export const ClassListWrap = css`
  width: 100%;
  background: #ffeee7;
  height: 100vh;
  margin-top: -45px;
  z-index: 100;
`
