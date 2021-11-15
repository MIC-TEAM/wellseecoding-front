import FooterMenu from 'src/components/Common/FooterMenu'
import TogetherHeader from 'src/components/Together/Header'
import StudySection from 'src/components/Together/StudySection'
import WriteButton from 'src/components/Together/WriteButton'
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/reducers'
import { useCallback, useEffect, useState } from 'react'
import { FETCHING_POSTS_REQUEST, RESET_POST_LIST } from 'src/reducers/posts'
import Loading from 'src/components/Loading'
import Head from 'next/head'
import { notificationType } from 'src/types'
import { FETCHING_NOTIS_REQUEST } from 'src/reducers/notifications'
import axios from 'axios'

const Write = () => {
  const { posts, post } = useSelector((state: RootState) => state.posts)
  const { notifications } = useSelector((state: RootState) => state.notifications)
  const dispatch = useDispatch()

  /* 알림 유무를 판단할 state */
  const [notis, setNotis] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
  }, [])

  /* 알림 배열이 빈 배열일 경우 서버에 요청하여 알림 배열을 불러온다 */
  useEffect(() => {
    if (!notifications.length) fetchNotifications()
  }, [])

  /* 알림 배열이 넘어왔을 경우 읽지 않은 알림이 있는지 확인하는 로직을 실행 */
  useEffect(() => {
    if (notifications.length) {
      checkNotificationss(notifications)
    }
  }, [notifications])

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

  return (
    <div style={{ background: '#ffeee7', height: '100%' }}>
      <Head>
        <title>함께해요 | wellseecoding</title>
        <meta name="description" content="랜덤 키워드를 바탕으로 게시물을 불러오는 함께해요 페이지입니다." />
      </Head>
      <TogetherHeader notis={notis} />

      <main css={togetherBoard}>
        <div className="wrap">
          {posts ? posts.map((p, i) => <StudySection key={i} theme={p.theme} posts={p.posts} />) : <Loading />}
        </div>
      </main>
      <WriteButton />

      <FooterMenu />
    </div>
  )
}

export default Write

const togetherBoard = css`
  background: #ffeee7;
  width: 100%;
  height: 85vh;
  padding-bottom: 100px;

  @media (max-width: 420px) {
    height: 90vh;
    background: #ffeee7;
  }

  .wrap {
    height: 100%;
    padding-top: 8px;
    background: #ffeee7;
  }

  .wrap section:last-child {
    background: #ffeee7;
    @media (max-width: 420px) {
      padding-bottom: 100px;
    }
  }
`
