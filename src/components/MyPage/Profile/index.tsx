import { box } from './style'

interface ProfileProps {
  name: string
  job: string
  nowJob: string
  nowCareer: string
  skill: string[]
}

const Profile = (props: ProfileProps) => {
  return (
    <section css={box}>
      <div className="profile">
        <p>{/* 이미지 */}</p>

        <div className="me">
          <h2>{props.name}</h2>
          <strong>{props.job}</strong>
        </div>

        <button type="button">
          <img src="/images/common/update.svg" alt="수정버튼" />
        </button>
      </div>

      <div className="moreme career">
        <h3>김혜원님은 현재?</h3>
        <p>
          현재 {props.nowJob} | 경력 {props.nowCareer}
        </p>
      </div>

      <div className="moreme skill">
        <h3>김혜원님의 기술스택은?</h3>
        <ul>
          <li>{props.skill}</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
