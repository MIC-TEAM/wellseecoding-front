import { css } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { Common } from 'styles/common'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import JobButton from 'components/Common/JobButton'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import axios from 'axios'
import { REGISTER_ABOUT_ME_URL } from 'apis'

type Props = {
  PropAboutMe: string
  PropHashtag: string[]
  PropJob: string
}

/* 전달 받은 props를 필요한 Input에 초기값으로 설정해준다 */
const NeedUpdated = ({ PropAboutMe, PropHashtag, PropJob }: Props) => {
  // 간단한 자기소개, 기술스택
  const [aboutMe, setAboutMe] = useState<string>(PropAboutMe)
  const [hashtag, setHashtag] = useState<string | ''>('')
  const [job, setJob] = useState<string>(PropJob)
  // 해시태그를 담을 배열
  const [hashArr, setHashArr] = useState<string[] | []>(PropHashtag)

  // 직무 선택시 다음으로 넘어갈 수 있도록
  const [isChecked, setIsChecked] = useState<boolean>(false)

  // 유효성 검사
  const [isAboutMe, setIsAboutMe] = useState<boolean>(false)

  /* 초기값으로 전달 받은 props(문자열)의 길이가 있다면 다음으로 넘어갈 수 있도록 setIsAboutMe 를 true로 변경  */
  useEffect(() => {
    PropAboutMe && setIsAboutMe(true)
  }, [PropAboutMe])

  useEffect(() => {
    const $outer = document.querySelector('.HashWrapOuter')

    const handleRemove = (e: any) => {
      setHashArr(hashArr.filter((v) => v !== e.target.innerHTML.replace(/[#]/, '')))
      $outer?.removeChild(e.target)
    }

    if ($outer) {
      $outer.addEventListener('click', handleRemove)

      return () => {
        $outer.removeEventListener('click', handleRemove)
      }
    }
  }, [hashArr])

  // ----직무선택----
  // 서버/백엔드
  const onChangeBackEnd = useCallback(() => {
    const jobBackEnd = document.getElementsByClassName('jobBackEnd')
    const jobArr = jobBackEnd

    if (jobArr) {
      setJob('서버/백엔드')
      setIsChecked(true)
    }
  }, [])

  // 프론트엔드
  const onChangeFrontEnd = useCallback(() => {
    const jobFrontEnd = document.getElementsByClassName('jobFrontEnd')
    const jobArr = jobFrontEnd

    if (jobArr) {
      setJob('프론트엔드')
      setIsChecked(true)
    }
  }, [])

  // 웹 풀스택
  const onChangeFull = useCallback(() => {
    const jobFull = document.getElementsByClassName('jobFull')
    const jobArr = jobFull

    if (jobArr) {
      setJob('웹 풀스택')
      setIsChecked(true)
    }
  }, [])

  //모바일 앱
  const onChangeMobile = useCallback(() => {
    const jobMobile = document.getElementsByClassName('jobMobile')
    const jobArr = jobMobile

    if (jobArr) {
      setJob('모바일 앱')
      setIsChecked(true)
    }
  }, [])

  // 게임 서버
  const onChangeGame = useCallback(() => {
    const jobGame = document.getElementsByClassName('jobGame')
    const jobArr = jobGame

    if (jobArr) {
      setJob('게임 서버')
      setIsChecked(true)
    }
  }, [])

  // 게임 클라이언트
  const onChangeGameClient = useCallback(() => {
    const jobGameClient = document.getElementsByClassName('jobGameClient')
    const jobArr = jobGameClient

    if (jobArr) {
      setJob('게임 클라이언트')
      setIsChecked(true)
    }
  }, [])

  // 데이터 엔지니어
  const onChangeDBA = useCallback(() => {
    const jobDBA = document.getElementsByClassName('jobDBA')
    const jobArr = jobDBA

    if (jobArr) {
      setJob('데이터 엔지니어(DBA)')
      setIsChecked(true)
    }
  }, [])

  // 개발 매니저
  const onChangePM = useCallback(() => {
    const jobPM = document.getElementsByClassName('jobPM')
    const jobArr = jobPM

    if (jobArr) {
      setJob('개발 매니저(PM)')
      setIsChecked(true)
    }
  }, [])

  // devops/시스템 엔지니어
  const onChangeDevops = useCallback(() => {
    const jobDevops = document.getElementsByClassName('jobDevops')
    const jobArr = jobDevops

    if (jobArr) {
      setJob('devops/시스템 엔지니어')
      setIsChecked(true)
    }
  }, [])

  // 보안
  const onChangeSecurity = useCallback(() => {
    const jobSecurity = document.getElementsByClassName('jobSecurity')
    const jobArr = jobSecurity

    if (jobArr) {
      setJob('보안')
      setIsChecked(true)
    }
  }, [])

  // QA
  const onChangeQA = useCallback(() => {
    const jobQA = document.getElementsByClassName('jobQA')
    const jobArr = jobQA

    if (jobArr) {
      setJob('QA')
      setIsChecked(true)
    }
  }, [])

  // 인공지능/머신러닝
  const onChangeAi = useCallback(() => {
    const jobAi = document.getElementsByClassName('jobAi')
    const jobArr = jobAi

    if (jobArr) {
      setJob('인공지능/머신러닝')
      setIsChecked(true)
    }
  }, [])

  // HW/임베디드
  const onChangeHW = useCallback(() => {
    const jobHW = document.getElementsByClassName('jobHW')
    const jobArr = jobHW

    if (jobArr) {
      setJob('HW/임베디드')
      setIsChecked(true)
    }
  }, [])

  // SW/솔루션
  const onChangeSW = useCallback(() => {
    const jobSW = document.getElementsByClassName('jobSW')
    const jobArr = jobSW

    if (jobArr) {
      setJob('SW/솔루션')
      setIsChecked(true)
    }
  }, [])

  const onChangeAboutMe = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value)

    if (e.target.value) {
      setIsAboutMe(true)
    } else {
      setIsAboutMe(false)
    }
  }, [])

  const onChangeHashtag = useCallback((e) => {
    // space 입력시 '' 빈문자열로 변환하여 Hashtage state에 저장한다
    const replaceStr = e.target.value.replace(/(\s*)/g, '')
    setHashtag(replaceStr)
  }, [])

  const onKeyUp = useCallback(
    (e) => {
      if (process.browser) {
        const $HashWrapOuter = document.querySelector('.HashWrapOuter')
        const $HashWrapInner = document.createElement('div')
        $HashWrapInner.className = 'HashWrapInner'
        $HashWrapInner.addEventListener('click', () => {
          $HashWrapOuter?.removeChild($HashWrapInner)
          setHashArr(hashArr.filter((hashtag) => hashtag))
        })
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
          const replaceStr = e.target.value.replace(/(\s*)/g, '')
          $HashWrapInner.innerHTML = '#' + replaceStr
          $HashWrapOuter?.appendChild($HashWrapInner)
          setHashArr((hashArr) => [...hashArr, hashtag])
          setHashtag('')
        }
      }
    },
    [hashtag, hashArr]
  )

  /* 수정 로직도 하위 컴포넌트에서 진행한다 */
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await axios
          .put(REGISTER_ABOUT_ME_URL, {
            aboutMe: aboutMe,
            tags: hashArr,
            job: job,
          })
          .then((res) => {
            if (res.status === 200) {
              location.replace('/mypage')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [aboutMe, hashArr, job]
  )

  return (
    <form css={selfWrap} onSubmit={onSubmit}>
      <TextFieldProfile
        value={aboutMe}
        text="자기소개"
        placeholder="간단하게 자기소개해주세요!"
        type="text"
        onChange={onChangeAboutMe}
      />
      <h2 className="skillTitle">기술스택</h2>

      <div className="HashWrap" css={hashDivrap}>
        <div className="HashWrapOuter">
          {PropHashtag ? (
            PropHashtag.map((v, i) => (
              <div className="HashWrapInner" key={i}>
                #{v}
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <input placeholder="입력후 Enter" type="text" value={hashtag} onChange={onChangeHashtag} onKeyUp={onKeyUp} />
      </div>

      <div css={jobList}>
        <div>
          <h2>직무</h2>
          <p>1가지만 선택*</p>
        </div>

        <JobButton onClick={onChangeBackEnd} job_text="서버/백엔드" className="jobBackEnd" />
        <JobButton onClick={onChangeFrontEnd} job_text="프론트엔드" className="jobFrontEnd" />
        <JobButton onClick={onChangeFull} job_text="웹 풀스택" className="jobFull" />
        <JobButton onClick={onChangeMobile} job_text="모바일 앱" className="jobMobile" />
        <JobButton onClick={onChangeGame} job_text="게임 서버" className="jobGame" />
        <JobButton onClick={onChangeGameClient} job_text="게임 클라이언트" className="jobGameClient" />
        <JobButton onClick={onChangeDBA} job_text="데이터 엔지니어(DBA)" className="jobDBA" />
        <JobButton onClick={onChangePM} job_text="개발 매니저(PM)" className="jobPM" />
        <JobButton onClick={onChangeDevops} job_text="devops/시스템 엔지니어" className="jobDevops" />
        <JobButton onClick={onChangeSecurity} job_text="보안" className="jobSecurity" />
        <JobButton onClick={onChangeQA} job_text="QA" className="jobQA" />
        <JobButton onClick={onChangeAi} job_text="인공지능/머신러닝" className="jobAi" />
        <JobButton onClick={onChangeHW} job_text="HW/임베디드" className="jobHW" />
        <JobButton onClick={onChangeSW} job_text="SW/솔루션" className="jobSW" />
      </div>

      <div css={footButtonWrapper}>
        <div className="wrap">
          <FootButton
            type="submit"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!(isAboutMe && hashArr && isChecked)}
          >
            다음
          </FootButton>
        </div>
      </div>
    </form>
  )
}

export default NeedUpdated

const footButtonWrapper = css`
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  position: fixed;
  bottom: 4rem;
  left: 0;
  right: 0;
  padding: 0 20px;
  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
  }

  .wrap {
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    & > button:nth-of-type(1) {
      margin-bottom: 11px;
      margin-top: 20px;
    }
  }
`

const jobList = css`
  padding-bottom: 4rem;
  h2 {
    font-size: ${Common.fontSize.fs20};
  }

  div {
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -1px;
    p {
      font-size: ${Common.fontSize.fs16};
      color: #ff6e35;
    }
  }
`

const selfWrap = css`
  margin-top: 1.7em;
  margin-bottom: 20vh;
  padding: 0 20px;
  z-index: 10500;
  .skillTitle {
    margin-top: 1em;
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -1px;
  }
`

const hashDivrap = css`
  margin-top: 14px;
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: -0.6px;
  border-bottom: 1.6px solid ${Common.colors.gray04};
  padding: 2px 2px 8px 2px;
  input {
    font-size: 2rem;
    &::placeholder {
      color: #d3cfcc !important;
    }
  }
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
