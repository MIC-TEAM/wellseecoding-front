/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NOTI_REQUEST } from 'src/reducers/notifications'
import { Common } from 'src/styles/common'
import { notificationType } from 'src/types'
// import Alarm from 'public/images/common/alarm.svg'

type Props = {
  data: notificationType[]
}
const AlarmList = ({ data }: Props) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const locationTo = useCallback(
    (id, query) => {
      router.push(`posts/${query}`).then(() => {
        dispatch({
          type: UPDATE_NOTI_REQUEST,
          data: Number(id),
        })
      })
    },
    [router, dispatch]
  )

  return (
    <div css={alarmListBox}>
      {data.map((v) => (
        <div key={v.id}>
          {v.read ? (
            <div onClick={() => locationTo(`${v.id}`, `${v.postId}`)}>
              <div className="header">
                <h4>
                  {v.eventCategory === 'COMMENT_ADDED' && '댓글알림 '}
                  {v.eventCategory === 'MEMBER_APPLIED' && '가입요청 '}
                  {v.eventCategory === 'MEMBER_APPROVED' && '가입승인 '}
                  <img src="/images/common/alarm.svg" alt="알림" />
                </h4>
                {Math.floor((Date.now() / 1000 - v.timestamp) / 24 / 60 / 60) >= 1 ? (
                  <span> {Math.floor((Date.now() / 1000 - v.timestamp) / 24 / 60 / 60)} 일전 </span>
                ) : (
                  <span>오늘</span>
                )}
              </div>

              <p>
                {v.eventCategory === 'COMMENT_ADDED' && `${v.senderUserName}님이 '${v.postTitle}' 글에 댓글을 달았어요`}
                {v.eventCategory === 'MEMBER_APPLIED' &&
                  `${v.senderUserName}님이 ${v.receiverUserName}님의 '${v.postTitle}' 글에 가입신청했어요`}
                {v.eventCategory === 'MEMBER_APPROVED' &&
                  `${v.receiverUserName}님이 요청하신 '${v.postTitle}' 글에 가입이 완료됐어요`}
              </p>
            </div>
          ) : (
            <div className="on" onClick={() => locationTo(`${v.id}`, `${v.postId}`)}>
              <div className="header">
                <h4>
                  {v.eventCategory === 'COMMENT_ADDED' && '댓글알림 '}
                  {v.eventCategory === 'MEMBER_APPLIED' && '가입요청 '}
                  {v.eventCategory === 'MEMBER_APPROVED' && '가입승인 '}
                  <img src="/images/common/alarm.svg" alt="알림" />
                </h4>
                {Math.floor((Date.now() / 1000 - v.timestamp) / 24 / 60 / 60) >= 1 ? (
                  <span> {Math.floor((Date.now() / 1000 - v.timestamp) / 24 / 60 / 60)} 일전 </span>
                ) : (
                  <span>오늘</span>
                )}
              </div>

              <p>
                {v.eventCategory === 'COMMENT_ADDED' && `${v.senderUserName}님이 '${v.postTitle}' 글에 댓글을 달았어요`}
                {v.eventCategory === 'MEMBER_APPLIED' &&
                  `${v.senderUserName}님이 ${v.receiverUserName}님의 '${v.postTitle}' 글에 가입신청했어요`}
                {v.eventCategory === 'MEMBER_APPROVED' &&
                  `${v.receiverUserName}님이 요청하신 '${v.postTitle}' 글에 가입이 완료됐어요`}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AlarmList

const alarmListBox = css`
  cursor: pointer;
  img {
    margin-right: 10px;
  }
  .on {
    background: #ffeee7;
  }
  & > div > div {
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
