import FootButton, { FootButtonType } from 'components/Common/FootButton'
import TogetherBack from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import { useCallback } from 'react'

import { useState } from 'react'
import { useEffect } from 'react'

const TogetherWrite = () => {
  const [title, setTitle] = useState<string | ''>('')
  const [period, setPeriod] = useState<string | ''>('')
  const [schedule, setSchedule] = useState<string | ''>('')
  const [qualification, setQualification] = useState<string | ''>('')
  const [peopleNum, setPeopleNum] = useState<string | ''>('')
  const [hashtag, setHashtag] = useState<string | ''>('')

  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (
      title.length &&
      period.length &&
      schedule.length &&
      qualification.length &&
      peopleNum.length &&
      hashtag.length
    ) {
      setReady(true)
    } else {
      setReady(false)
    }
  }, [title, period, schedule, qualification, peopleNum, hashtag])

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const onChangePeriod = useCallback((e) => {
    setPeriod(e.target.value)
  }, [])

  const onChangeSchedule = useCallback((e) => {
    setSchedule(e.target.value)
  }, [])

  const onChangeQualification = useCallback((e) => {
    setQualification(e.target.value)
  }, [])

  const onChangePeopleNum = useCallback((e) => {
    setPeopleNum(e.target.value)
  }, [])

  const onChangeHashtag = useCallback((e) => {
    setHashtag(e.target.value)
  }, [])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      alert(
        `모임지역:${title}\n작업기간:${period}\n일정:${schedule}\n자격요건:${qualification}\n모집인원:${peopleNum}\n해시태그:${hashtag}`
      )
      setTitle('')
      setPeriod('')
      setSchedule('')
      setQualification('')
      setPeopleNum('')
      setHashtag('')
    },
    [title, period, schedule, qualification, peopleNum, hashtag]
  )

  return (
    <>
      <TogetherBack text="모임 글쓰기" />
      <main css={writeWrap}>
        <form css={writeForm} onSubmit={onSubmit}>
          <input type="text" value={title} onChange={onChangeTitle} placeholder="[모임지역]모임명" />
          <input type="text" value={period} onChange={onChangePeriod} placeholder="작업기간 (데드라인)" />
          <input
            type="text"
            value={schedule}
            onChange={onChangeSchedule}
            placeholder="일정 (주 몇회, 온라인/오프라인)"
          />
          <textarea
            rows={5}
            cols={5}
            value={qualification}
            onChange={onChangeQualification}
            placeholder="자격요건(취준/경력, 사용언어 등등)
          ex) 같은 취준생 / 경력 2년 이상
          프로젝트 경험 n번 이상
          해당 기술 스텍 사용 경험이 있는 사람"
          />

          <textarea
            rows={5}
            cols={5}
            value={peopleNum}
            onChange={onChangePeopleNum}
            placeholder="모집인원 (분야별/몇명)
ex) 프론트 n명, 백 n명
기획자나 디자이너가 있을 경우 명시"
          />

          <input type="text" value={hashtag} onChange={onChangeHashtag} placeholder="해시태그 입력" />
        </form>

        <div css={footButtonWrapper}>
          <FootButton
            type="submit"
            footButtonType={ready ? FootButtonType.ACTIVATION : FootButtonType.DISABLE}
            onClick={onSubmit}
          >
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
