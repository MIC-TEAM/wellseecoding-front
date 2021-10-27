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
import Loading from 'components/Loading'
import StudySectionOpt from 'components/Together/StudySectionOption'
import { FETCHING_NOTIS_REQUEST } from 'reducers/notifications'

const Home = () => {
  const { post, deletePostSuccess, writePostSuccess } = useSelector((state: RootState) => state.posts)
  const { homePosts } = useSelector((state: RootState) => state.home)
  const { notifications } = useSelector((state: RootState) => state.notifications)
  const dispatch = useDispatch()

  /* 로컬 스토리지에 저장된 이름과 고유 id */
  const [name, setName] = useState<string | null>(null)

  /* 알림 유무를 판단할 state */
  const [notis, setNotis] = useState<boolean>(false)

  useEffect(() => {
    if (!notifications.length) fetchNotifications()
  }, [])

  useEffect(() => {
    if (notifications.length) setNotis(true)
  }, [notifications])

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

  // homePosts 데이터가 없다면 loadHomePosts 호출
  useEffect(() => {
    !homePosts.length && loadHomePosts()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('id') && getLocalInfo()
    }
  }, [])

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

  const getLocalInfo = useCallback(() => {
    const myname = localStorage.getItem('userName')
    setName(myname)
  }, [])

  const fetchNotifications = useCallback(() => {
    console.log('FETCHING_NOTIS_REQUEST !')
    dispatch({
      type: FETCHING_NOTIS_REQUEST,
    })
  }, [dispatch])

  return (
    <>
      <Head>
        <title>홈 | wellseecoding</title>
        <meta name="description" content="개인 별 현황을 볼 수 있는 메인(홈) 페이지입니다." />
      </Head>
      <HomeHeader notis={notis} />

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
                  {v.likedGroups.length ? (
                    <StudySectionOpt key={i + 2} theme={'좋아요 한 '} posts={v.likedGroups} />
                  ) : (
                    <StudySectionOpt key={i + 2} theme={'좋아요 한 '} />
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
