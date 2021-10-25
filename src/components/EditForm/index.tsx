/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import EditBackOptional from 'components/Common/Header/EditBackOptional'
import { Alert } from '@material-ui/lab'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import { Common } from 'styles/common'
import { PostType } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_POST_REQUEST } from 'reducers/posts'
import { RootState } from 'reducers'

const EditForm = (props: PostType) => {
  const { id, name, deadline, schedule, summary, qualification, size, tags } = props

  const [editTitle, setTitle] = useState<string | ''>(name)
  const [editPeriod, setPeriod] = useState<string | ''>(deadline)
  const [editSchedule, setSchedule] = useState<string | ''>(schedule)
  const [editQualification, setQualification] = useState<string | ''>(qualification)
  const [editSummary, setSummary] = useState<string | ''>(summary)
  const [editPeopleNum, setPeopleNum] = useState<string | ''>(size)
  const [editHashtag, setHashtag] = useState<string | ''>('')
  // 해시태그를 담을 배열
  const [editHashArr, setHashArr] = useState<string[] | []>(tags)
  const [hashError, setHashError] = useState(false)

  const [ready, setReady] = useState(false)

  const dataArr = [editTitle, editPeriod, editSchedule, editQualification, editSummary, editPeopleNum, editHashArr]

  const dispatch = useDispatch()
  const { updatePostSuccess } = useSelector((state: RootState) => state.posts)

  useEffect(() => {
    updatePostSuccess && location.replace('/home')
  }, [updatePostSuccess])

  useEffect(() => {
    checkDataLength()
  }, [dataArr])

  useEffect(() => {
    const handleRemove = (e: any) => {
      setHashArr(editHashArr.filter((v) => v !== e.target.innerHTML.replace(/[#]/, '')))
      $outer?.removeChild(e.target)
    }

    const $outer = document.querySelector('.HashWrapOuter')

    if ($outer) {
      $outer.addEventListener('click', handleRemove)

      return () => {
        $outer.removeEventListener('click', handleRemove)
      }
    }
  }, [editHashArr])

  /* dataArr의 문자열이 존재한다면 > 버튼을 활성화 */
  const checkDataLength = useCallback(() => {
    if (dataArr.every((data) => data?.length) === true) setReady(true)
  }, [dataArr])

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

  const onChangeSummary = useCallback((e) => {
    setSummary(e.target.value)
  }, [])

  const onChangePeopleNum = useCallback((e) => {
    setPeopleNum(e.target.value)
  }, [])

  const onChangeHashtag = useCallback((e) => {
    // space 입력시 '' 빈문자열로 변환하여 Hashtage state에 저장한다
    const replaceStr = e.target.value.replace(/(\s*)/g, '')
    setHashtag(replaceStr)
  }, [])

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      dispatch({
        type: UPDATE_POST_REQUEST,
        data: {
          id: id,
          name: editTitle,
          deadline: editPeriod,
          schedule: editSchedule,
          qualification: editQualification,
          summary: editSummary,
          size: editPeopleNum,
          tags: editHashArr,
        },
      })
    },
    [id, editTitle, editPeriod, editSchedule, editQualification, editSummary, editPeopleNum, editHashArr, dispatch]
  )

  const onKeyUp = useCallback(
    (e) => {
      // SSR 시에 브라우저의 document가 로드되기 전에 동작되므로
      // process.browser 라는 코드를 통해 브라우저가 정상 로드된 이후 코드를 사용할 수 있도록 만든다
      if (process.browser) {
        // 해시태그가 될 div
        const $HashWrapOuter = document.querySelector('.HashWrapOuter')
        const $HashWrapInner = document.createElement('div')
        $HashWrapInner.className = 'HashWrapInner'
        /* 클릭시 부모 div에서 해당 요소 삭제*/
        $HashWrapInner.addEventListener('click', () => {
          // div 태그에 대한 이벤트
          $HashWrapOuter?.removeChild($HashWrapInner)
          /*  hashArr state 배열에서 해당 hashTag를 삭제 */
          setHashArr(editHashArr.filter((hashtag) => hashtag))
        })

        /* space bar 키 코드: 32 */
        e.keyCode === 32 ? setHashError(true) : setHashError(false)

        /* enter 키 코드 :13 */
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
          const replaceStr = e.target.value.replace(/(\s*)/g, '')
          $HashWrapInner.innerHTML = '#' + replaceStr
          $HashWrapOuter?.appendChild($HashWrapInner)
          setHashArr((hashArr) => [...hashArr, editHashtag])
          setHashtag('')
        }
      }
    },
    [editHashtag, editHashArr]
  )

  return (
    <div css={modalWrap}>
      <EditBackOptional text="수정하기" />
      <main css={writeWrap}>
        <form css={writeForm} onSubmit={onSubmit}>
          <input type="text" value={editTitle} onChange={onChangeTitle} placeholder="[모임지역]모임명" />
          <input type="text" value={editPeriod} onChange={onChangePeriod} placeholder="작업기간 (데드라인)" />
          <input
            type="text"
            value={editSchedule}
            onChange={onChangeSchedule}
            placeholder="일정 (주 몇회, 온라인/오프라인)"
          />
          <textarea
            rows={5}
            cols={5}
            value={editQualification}
            onChange={onChangeQualification}
            placeholder="자격요건(취준/경력, 사용언어 등등) 
ex) 같은 취준생 / 경력 2년 이상 
프로젝트 경험 n번 이상 해당 기술 스텍 사용 경험이 있는 사람"
          />

          <textarea
            rows={5}
            cols={5}
            value={editSummary}
            onChange={onChangeSummary}
            placeholder="스터디 설명
스터디에 대한 목적 및 간단한 설명 입력"
          />

          <textarea
            rows={5}
            cols={5}
            value={editPeopleNum}
            onChange={onChangePeopleNum}
            placeholder="모집인원 (분야별/몇명)
ex) 프론트 n명, 백 n명
기획자나 디자이너가 있을 경우 명시"
          />
          <div className="HashWrap" css={hashDivrap}>
            <div className="HashWrapOuter">
              {tags &&
                tags?.map((v, i) => (
                  <div className="HashWrapInner" key={i}>
                    #{v}
                  </div>
                ))}
            </div>
            <input
              className="HashInput"
              type="text"
              value={editHashtag}
              onChange={onChangeHashtag}
              onKeyUp={onKeyUp}
              placeholder="해시태그 입력"
            />
          </div>
          {hashError && (
            <Alert variant="outlined" severity="error" style={{ margin: '10px 0' }}>
              해시태그 등록 시에 스페이스바를 사용하실 수 없습니다.
            </Alert>
          )}
          <div css={footButtonWrapper}>
            <FootButton
              type="submit"
              footButtonType={ready ? FootButtonType.ACTIVATION : FootButtonType.DISABLE}
              onClick={onSubmit}
            >
              수정하기
            </FootButton>
          </div>
        </form>
      </main>
    </div>
  )
}

export default EditForm

const modalWrap = css`
  background-color: white;
  width: 100%;
  height: 100vh;
  z-index: 10500;
  position: absolute;
  top: 0;
  overflow-y: auto;
`

const footButtonWrapper = css`
  position: absolute;
  /* bottom: 0.4em; */
  left: 0;
  right: 0;
  padding: 0 20px;
  background: #fff;
  padding-top: 40px;
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const writeForm = css`
  height: 90%;
  width: 100%;
  /* margin-bottom: 100px; */
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

const hashDivrap = css`
  margin-top: 24px;
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: -0.6px;
  color: #444241;
  border-bottom: 1.6px solid ${Common.colors.gray04};
  padding: 2px 2px 8px 2px;

  .HashWrapOuter {
    display: flex;
    flex-wrap: wrap;
  }

  .HashWrapInner {
    margin-top: 5px;
    background: #ffeee7;
    border-radius: 56px;
    padding: 8px 12px;
    color: #ff6e35;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 20px;
    margin-right: 5px;
    cursor: pointer;
  }

  .HashInput {
    width: auto;
    margin: 10px;
    display: inline-flex;
    outline: none;
    cursor: text;
    line-height: 2rem;
    margin-bottom: 0.75rem;
    min-width: 8rem;
    border: none;
  }
`

const writeWrap = css`
  height: 95%;
  padding: 0 20px;
`
