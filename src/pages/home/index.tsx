import FooterMenu from 'components/Common/FooterMenu'
import HomeHeader from 'components/Home/Header'
import HomeMain from 'components/Home/Main'
import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_DELETE_STATE, RESET_POSTS_STATE, RESET_POST_LIST } from 'reducers/posts'
import { RootState } from 'reducers'
import Head from 'next/head'
import { FETCHING_HOME_POSTS_REQUEST } from 'reducers/home'
// import StudySection from 'components/Together/StudySection'
import Loading from 'components/Loading'
import StudySectionOpt from 'components/Together/StudySectionOption'

const Home = () => {
  const { post, deletePostSuccess, writePostSuccess } = useSelector((state: RootState) => state.posts)
  const { homePosts } = useSelector((state: RootState) => state.home)
  const dispatch = useDispatch()
  const [name, setName] = useState<string | null>(null)

  // deletePostSuccess를 false로 초기화
  useEffect(() => {
    if (deletePostSuccess) {
      dispatch({
        type: RESET_DELETE_STATE,
      })
    }
  }, [dispatch, deletePostSuccess])

  // writePostSuccess를 false로 초기화
  useEffect(() => {
    if (writePostSuccess) {
      dispatch({
        type: RESET_POSTS_STATE,
      })
    }
  }, [dispatch, writePostSuccess])

  useEffect(() => {
    !homePosts.length && loadHomePosts()
  }, [])

  useEffect(() => {
    localStorage.getItem('id') && getUserName()
  })

  useEffect(() => {
    post.length && resetPost()
  }, [post])

  const loadHomePosts = useCallback(() => {
    dispatch({
      type: FETCHING_HOME_POSTS_REQUEST,
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
      <Head>
        <title>홈 | wellseecoding</title>
      </Head>
      <HomeHeader />

      <div css={wrap}>
        {homePosts.length ? (
          homePosts.map((v, i) => <HomeMain user={name} num={v.registeredGroups.length} key={i} />)
        ) : (
          <HomeMain user={name} num={4} />
        )}

        <div className="listWrap">
          <main css={ClassListWrap}>
            {homePosts.length ? (
              homePosts.map((v, i) => (
                <div key={i}>
                  {v.createdGroups.length ? (
                    <StudySectionOpt key={i + 1} theme={'만든 '} posts={v.createdGroups} />
                  ) : (
                    <StudySectionOpt key={i + 1} theme={'만든 '} />
                  )}
                  {v.likedGroups.length ? (
                    <StudySectionOpt key={i + 2} theme={'좋아요 한 '} posts={v.likedGroups} />
                  ) : (
                    <StudySectionOpt key={i + 2} theme={'좋아요 한 '} />
                  )}
                  {v.registeredGroups.length ? (
                    <StudySectionOpt key={i + 3} theme={'가입한 '} posts={v.registeredGroups} />
                  ) : (
                    <StudySectionOpt key={i + 3} theme={'가입한 '} />
                  )}
                  {v.appliedGroups.length ? (
                    <StudySectionOpt key={i + 4} theme={'가입 신청한 '} posts={v.appliedGroups} />
                  ) : (
                    <StudySectionOpt key={i + 4} theme={'가입 신청한 '} />
                  )}
                </div>
              ))
            ) : (
              <Loading />
            )}
          </main>
        </div>
      </div>

      <FooterMenu />
    </>
  )
}

export default Home

const wrap = css`
  height: auto;
  .listWrap {
    background: #ffeee7;
    height: 90%;
  }
`

export const ClassListWrap = css`
  width: 100%;
  background: #ffeee7;
  height: 100%;
  margin-top: -45px;
  z-index: 100;
`
