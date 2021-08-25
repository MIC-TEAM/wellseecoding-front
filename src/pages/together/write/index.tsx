import { footButtonWrapper } from './style'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import TogetherBack from 'components/Together/Header/Back'
import { writeForm, writeWrap } from './style'

const TogetherWrite = () => {
  return (
    <main css={writeWrap}>
      <TogetherBack />

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
  )
}

export default TogetherWrite
