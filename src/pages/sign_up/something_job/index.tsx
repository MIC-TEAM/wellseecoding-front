import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { Common } from 'styles/common'

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

const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const job = css`
  grid-template-columns: auto auto;
  display: grid;
  margin-top: 36px;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  button {
    border: 2px solid #efebe8;
    box-sizing: border-box;
    width: 163px;
    height: 163px;
    border-radius: 50%;
    display: inline-block;
    font-weight: 500;
    font-size: ${Common.fontSize.fs20};
    line-height: 28px;
    color: #b6b2b0;
    &:focus {
      border: 2px solid #ff6e35;
      color: #ff6e35;
    }
  }
`
