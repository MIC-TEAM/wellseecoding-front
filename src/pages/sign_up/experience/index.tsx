import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFields from 'components/Common/TextField'
import { css } from '@emotion/react'

const Experience = () => {
  return (
    <>
      <Back />

      <Title title="경력 정보를 적어주세요!" className="loginMt" />

      <div css={infoWrap}>
        <div css={info}>
          <TextFields type="text" text="역할" />
          <TextFields type="text" text="기술스택" />
          <TextFields type="text" text="경력" />
        </div>

        <button css={companyAdd}>
          <span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
              <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
            </svg>
          </span>
          <span>회사 추가</span>
        </button>
      </div>

      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP}>
          나중에 쓸게요~
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          다음
        </FootButton>
      </div>
    </>
  )
}

export default Experience

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

const info = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;

  &:nth-of-type(1) {
    margin-top: 40px;
  }
`
const infoWrap = css`
  padding: 0 20px;
`

const companyAdd = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  padding: 15px 0;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #ff6e35;
    margin-left: 8px;
  }
`
