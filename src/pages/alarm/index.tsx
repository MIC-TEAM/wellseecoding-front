import AlarmList from 'components/Alarm/List'
import AlarmTitle from 'components/Alarm/Title'
import Back from 'components/Common/Header/Back'
import { useEffect, useState } from 'react'
import Head from 'next/head'

const Alarm = () => {
  const [myId, setMyId] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('id')
      setMyId(Number(userId))
    }
  }, [])

  useEffect(() => {
    if (myId !== 0) console.log('myId', myId)
  }, [myId])

  return (
    <div>
      <Head>
        <title>알림 | wellseecoding</title>
        <meta name="description" content="알림 페이지입니다." />
      </Head>
      <Back />
      <AlarmTitle num={2} />
      <AlarmList />
    </div>
  )
}

export default Alarm
