import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { footButtonWrapper } from './style'

const SomethingJob = () => {
  return (
    <>
      <Back />

      <Title title="어떤 일을 하고 계세요?" className="loginMt" />

      <div>
        <button type="button">
          <img src="/images/signup/job01.svg" alt="학생" />
          <p>학생</p>
        </button>
        <button type="button">
          <img src="/images/signup/job02.svg" alt="취준생" />
          <p>취준생</p>
        </button>
        <button type="button">
          <img src="/images/signup/job03.svg" alt="직장인" />
          <p>직장인</p>
        </button>
      </div>

      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          다음
        </FootButton>
      </div>
    </>
  )
}

export default SomethingJob
