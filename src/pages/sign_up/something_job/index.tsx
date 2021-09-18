import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import { useRouter } from 'next/router'

const SomethingJob = () => {
  const router = useRouter()

  const NextHome = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    router.push('/sign_up/self_introduction')
  }
  return (
    <>
      <Back />

      <Title title="어떤 일을 하고 계세요?" className="loginMt" />

      <form css={job}>
        <div>
          <button type="button" className="job">
            <img src="/images/signup/job01.svg" alt="학생" />
            <p>학생</p>
          </button>
        </div>

        <div className="row-coloum">
          <button type="button" className="job">
            <img src="/images/signup/job03.svg" alt="직장인" />
            <p>직장인</p>
          </button>

          <button type="button" className="job">
            <img src="/images/signup/job02.svg" alt="취준생" />
            <p>취준생</p>
          </button>
        </div>
      </form>

      <div css={footButtonWrapper}>
        <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} onClick={NextHome}>
          다음
        </FootButton>
      </div>
    </>
  )
}

export default SomethingJob

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;
  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
  }
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const job = css`
  text-align: center;
  display: grid;
  margin-top: 36px;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  .row-coloum {
    grid-template-columns: auto auto;
    grid-gap: 10px;
    display: grid;
  }
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
