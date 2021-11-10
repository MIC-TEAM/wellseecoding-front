import { box } from './style'
import React, { useCallback } from 'react'
import router from 'next/router'

interface ProfileProps {
  id: string | null
  name: string | null
  job: string
  nowJob: string
  skill: string[]
  aboutme: string
}

const Profile = (props: ProfileProps) => {
  const myInfo = JSON.stringify(localStorage.getItem('access_token'))

  const UpdatePage = useCallback(() => {
    router.push('/sign_up/self_introduction/update')
  }, [router])

  return (
    <section css={box}>
      <div className="profile">
        <p>
          <img src={`https://www.gravatar.com/avatar/${props.id}}?d=identicon&f=y`} alt="gravatar" />
        </p>

        <div className="me">
          <h2>{props.name}</h2>
          <strong>{props.job}</strong>
        </div>

        {myInfo ? (
          <button type="button" onClick={UpdatePage}>
            <img src="/images/common/update.svg" alt="수정버튼" />
          </button>
        ) : (
          <div></div>
        )}
      </div>

      <div className="moreme career">
        <h3>{props.name}님은 현재?</h3>
        <p>{props.nowJob}이에요! </p>
      </div>

      <div className="moreme skill">
        <h3>{props.name}님의 기술스택은?</h3>
        <ul>
          <li>#{props.skill}</li>
        </ul>
      </div>

      <div className="moreme">
        <h3>{props.name}님의 자기소개</h3>
        <ul>
          <li>{props.aboutme}</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
