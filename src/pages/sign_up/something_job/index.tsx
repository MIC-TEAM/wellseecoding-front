import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { footButtonWrapper, job } from './style'

const SomethingJob = () => {
  return (
    <>
      <Back />

      <Title title="어떤 일을 하고 계세요?" className="loginMt" />

      <div css={job}>
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
