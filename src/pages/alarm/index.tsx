import AlarmList from 'components/Alarm/List'
import AlarmTitle from 'components/Alarm/Title'
import Back from 'components/Common/Header/Back'
import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { FETCHING_NOTIS_REQUEST } from 'reducers/notifications'

const Alarm = () => {
  const [myId, setMyId] = useState(0)
  const { notifications } = useSelector((state: RootState) => state.notifications)

  const dispatch = useDispatch()

  useEffect(() => {
    notifications.length && console.log('notifications', notifications)
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
    console.log('FETCHING_NOTIS_REQUEST !')
    dispatch({
      type: FETCHING_NOTIS_REQUEST,
    })
  }, [dispatch])

  return (
    <div>
      <Head>
        <title>알림 | wellseecoding</title>
        <meta name="description" content="알림 페이지입니다." />
      </Head>
      <Back />
      <AlarmTitle num={2} />
      <AlarmList data={notifications} />
    </div>
  )
}

export default Alarm
