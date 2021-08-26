import FootButton, { FootButtonType } from 'components/Common/FootButton'
import TogetherBack from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import { Common } from 'styles/common'

const TogetherWrite = () => {
  return (
    <>
      <TogetherBack text="모임 글쓰기" />
      <main css={writeWrap}>
        <form css={writeForm}>
          <input type="text" placeholder="[모임지역]모임명" />
          <input type="text" placeholder="작업기간 (데드라인)" />
          <input type="text" placeholder="일정 (주 몇회, 온라인/오프라인)" />
          <textarea
            rows={5}
            cols={5}
            placeholder="자격요건(취준/경력, 사용언어 등등)
          ex) 같은 취준생 / 경력 2년 이상
          프로젝트 경험 n번 이상
          해당 기술 스텍 사용 경험이 있는 사람"
          />

          <textarea
            rows={5}
            cols={5}
            placeholder="모집인원 (분야별/몇명)
ex) 프론트 n명, 백 n명
기획자나 디자이너가 있을 경우 명시"
          />

          <input type="text" placeholder="해시태그 입력" />
        </form>

        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.DISABLE}>
            다음
          </FootButton>
        </div>
      </main>
    </>
  )
}

export default TogetherWrite

const footButtonWrapper = css`
  position: fixed;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;
  background: #fff;
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const writeForm = css`
  width: 100%;
  margin-bottom: 200px;
  input {
    width: 100%;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 26px;
    text-align: justify;
    letter-spacing: -0.6px;
    color: #444241;
    border-bottom: 1.6px solid ${Common.colors.gray04};
    margin-top: 24px;
    padding-bottom: 8px;
    &::placeholder {
      color: ${Common.colors.gray04};
    }
  }
  textarea {
    border-bottom: 1px solid #d3d0cc !important;
    width: 100%;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 26px;
    text-align: justify;
    letter-spacing: -0.6px;
    color: #444241;
    margin-top: 24px;
    padding-bottom: 8px;
    border: none;
    resize: none;
    &::placeholder {
      color: ${Common.colors.gray04};
    }
    &::after {
      content: '';
      display: block;
      width: 60px;
      border-bottom: 1px solid #bcbcbc;
      margin: 20px 0px;
    }
  }
`

const writeWrap = css`
  padding: 0 20px;
`
