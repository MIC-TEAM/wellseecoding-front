import FooterMenu from 'src/components/Common/FooterMenu'
import HomeHeader from 'src/components/Home/Header'
import HomeMain from 'src/components/Home/Main'
import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RESET_DELETE_STATE, RESET_POSTS_STATE, RESET_POST_LIST } from 'src/reducers/posts'
import { RootState } from 'src/reducers'
import Head from 'next/head'
import { FETCHING_HOME_POSTS_REQUEST } from 'src/reducers/home'
import StudySectionOpt from 'src/components/Together/StudySectionOption'
import { FETCHING_NOTIS_REQUEST } from 'src/reducers/notifications'
import { homeData, notificationType } from 'src/types'
import axios from 'axios'
import Loading from 'src/components/Loading'
import WellseeErrorHome from 'src/components/Common/wellseeErrorHome'

const Home = () => {
  const { post, deletePostSuccess, writePostSuccess } = useSelector((state: RootState) => state.posts)
  const { homePosts } = useSelector((state: RootState) => state.home)
  const { notifications } = useSelector((state: RootState) => state.notifications)
  const dispatch = useDispatch()

  /* 아무것도 없는 경우, 글 보러가기 이미지 띄우는 state */
  const [homePostsState, setHomePostsState] = useState<boolean>(false)

  /* 로컬 스토리지에 저장된 이름과 고유 id */
  const [name, setName] = useState<string | null>(null)

  /* 알림 유무를 판단할 state */
  const [notis, setNotis] = useState<boolean>(false)

  const [tokenState, setTokenState] = useState<boolean>(false)

  /* 알림 배열이 빈 배열일 경우 서버에 요청하여 알림 배열을 불러온다 */
  useEffect(() => {
    if (!notifications.length && tokenState) fetchNotifications()
  }, [tokenState])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
    setTokenState(true)
  }, [])

  /* 알림을 받아와서, 알림 배열에 존재할 경우, 알림 내부에 읽지 않은 알림이 있는지 확인한다 */
  useEffect(() => {
    if (notifications.length) {
      checkNotificationss(notifications)
    }
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
    !homePosts.length && tokenState && loadHomePosts()
  }, [tokenState])

  useEffect(() => {
    homePosts.length && tokenState && compareHomePosts(homePosts)
  }, [homePosts, tokenState])

  // 브라우저가 온전히 받아와지면 로컬스토리지에 저장된 id라는 이름을 가진 아이템을 불러와 저장한다
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.getItem('id') && getLocalInfo()
    }
  }, [])

  useEffect(() => {
    post.length && tokenState && resetPost()
  }, [post, tokenState])

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
    dispatch({
      type: FETCHING_NOTIS_REQUEST,
    })
  }, [dispatch])

  const checkNotificationss = useCallback((arr: notificationType[]) => {
    arr.forEach((v) => {
      if (v.read === false) setNotis(true)
    })
  }, [])

  const compareHomePosts = useCallback((arr: homeData[]) => {
    arr.forEach((eachPost) => {
      if (
        !eachPost.appliedGroups.length &&
        !eachPost.createdGroups.length &&
        !eachPost.likedGroups.length &&
        !eachPost.registeredGroups.length
      ) {
        setHomePostsState(true)
      }
    })
  }, [])

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
          <Loading />
        )}

        <div css={ClassListWrap}>
          {!homePostsState ? (
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
            <WellseeErrorHome
              text={'아직 활동이 없어요..'}
              textOpt={'모임을 좋아요하고 가입하면 여기서 확인할 수 있어요! 모임을 찾아볼까요?'}
              buttonOpt={'모임 찾으러 가기'}
            />
          )}
        </div>
      </div>

      <FooterMenu />
    </>
  )
}

export default Home

const wrap = css`
  height: 90%;
  /* overflow-y: auto; */
  background: #ffeee7;
`

export const ClassListWrap = css`
  width: 100%;
  z-index: 100;
  padding-bottom: 100px;
  background: #ffeee7;
`
