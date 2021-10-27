import AlarmList from 'components/Alarm/List'
import AlarmTitle from 'components/Alarm/Title'
import Back from 'components/Common/Header/Back'
import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { FETCHING_NOTIS_REQUEST } from 'reducers/notifications'
import { RESET_POST_LIST } from 'reducers/posts'

const Alarm = () => {
  const [myId, setMyId] = useState<number>(0)
  const { notifications } = useSelector((state: RootState) => state.notifications)
  const { post } = useSelector((state: RootState) => state.posts)

  /* 읽지 않음 알림의 개수 */
  const [alarmCnt, setAlarmCnt] = useState<number>(0)

  const dispatch = useDispatch()

  useEffect(() => {
    if (post.length)
      dispatch({
        type: RESET_POST_LIST,
      })
  }, [post, dispatch])

  useEffect(() => {
    notifications.length && countNotReadedAlarm()
  }, [notifications])

  useEffect(() => {
    if (!notifications.length) fetchNotifications()
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('id')
      setMyId(Number(userId))
    }
  }, [])

  useEffect(() => {
    if (myId !== 0) console.log('myId', myId)
  }, [myId])

  const fetchNotifications = useCallback(() => {
    dispatch({
      type: FETCHING_NOTIS_REQUEST,
    })
  }, [dispatch])

  const countNotReadedAlarm = useCallback(() => {
    let cnt = 0
    notifications.forEach((v) => {
      if (v.read === false) cnt++
    })
    setAlarmCnt(cnt)
  }, [notifications])

  return (
    <div>
      <Head>
        <title>알림 | wellseecoding</title>
        <meta name="description" content="알림 페이지입니다." />
      </Head>
      <Back />
      <AlarmTitle num={alarmCnt} />
      <AlarmList data={notifications} />
    </div>
  )
}

export default Alarm
