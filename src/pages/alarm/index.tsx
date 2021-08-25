import { css } from '@emotion/react'
import AlarmList from 'components/Alarm/List'
import AlarmTitle from 'components/Alarm/Title'
import Back from 'components/Common/Header/Back'

const Alarm = () => {
  return (
    <div>
      <Back />
      <AlarmTitle num={2} />
      <AlarmList />
    </div>
  )
}

export default Alarm
