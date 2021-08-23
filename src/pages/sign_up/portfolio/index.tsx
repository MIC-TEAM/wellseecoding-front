import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFields from 'components/Common/TextField'
import { footButtonWrapper, info, companyAdd } from './style'

const Portfolio = () => {
  return (
    <>
      <Back />

      <Title title="포트폴리오를 올려주세요!" className="loginMt" />

      <div css={info}>
        <TextFields type="text" text="프로젝트 이름" />
        <TextFields type="text" text="링크" />
        <TextFields type="text" text="설명" />
      </div>

      <button css={companyAdd}>
        <span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
            <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
          </svg>
        </span>
        <span>포트폴리오 링크 추가</span>
      </button>

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

export default Portfolio
