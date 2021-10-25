/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Common } from 'styles/common'
import { notificationType } from 'types'

type Props = {
  classRoom: string
  user: string
  data: notificationType[]
}
const AlarmList = ({ user, classRoom, data }: Props) => {
  const router = useRouter()
  return (
    <div css={alarmListBox}>
      {data.map((v) => (
        <div key={v.id} className="on" onClick={() => router.push(`posts/${v.postId}`)}>
          <div className="header">
            <h4>
              <img src="/images/common/alarm.svg" alt="" />
              가입승인
            </h4>
            <span>3시간전</span>
          </div>

          <p>[postID]: {v.postId}</p>
        </div>
      ))}

      <div className="on">
        {/* 가입 요청 */}
        <div className="header">
          <h4>
            <img src="/images/common/alarm.svg" alt="" />
            가입요청
          </h4>

          <span>3시간전</span>
        </div>

        <p>
          {user}님이 {classRoom}에 가입 요청했어요!
        </p>
      </div>
      <div>
        {/* 가입 승인 */}
        <div className="header">
          <h4>
            <img src="/images/common/alarm.svg" alt="" />
            가입승인
          </h4>

          <span>3시간전</span>
        </div>

        <p>[서울]오프라인 IOS 개발 스터디 합정이나 홍대 근처 스터디룸 가입이 승인되었어요!</p>
      </div>

      <div>
        {/* 가입 요청 */}
        <div className="header">
          <h4>
            <img src="/images/common/alarm.svg" alt="" />
            가입요청
          </h4>

          <span>3시간전</span>
        </div>

        <p>
          {user}님이 {classRoom}에 가입 요청했어요!
        </p>
      </div>
    </div>
  )
}

export default AlarmList

AlarmList.defaultProps = {
  user: '이름없음',
  classRoom: '취미코딩',
}

const alarmListBox = css`
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  .on {
    background: #ffeee7;
  }
  & > div {
    &:nth-of-type(1) {
      border-top: 1px solid #efebe8;
    }
    padding: 20px;
    border-bottom: 1px solid #efebe8;
  }
  .header {
    font-size: ${Common.fontSize.fs14};
    letter-spacing: -0.4px;
    color: #8f8c8b;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: ${Common.fontSize.fs16};
    line-height: 18px;
    letter-spacing: -0.8px;
    color: #262626;
    margin-top: 13px;
    margin-left: 22px;
  }
`
