import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import JobButton from 'components/Common/JobButton'
import { Common } from 'styles/common'
import { css } from '@emotion/react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_ABOUT_ME_URL } from 'apis'
import { myConfig } from 'sagas'

const SelfIntroduction = () => {
  // 간단한 자기소개, 기술스택
  const [aboutMe, setAboutMe] = useState<string>('')
  const [skill, setSkill] = useState<string>('')

  // 직무 선택시 다음으로 넘어갈 수 있도록
  const [isChecked, setIsChecked] = useState<boolean>(false)

  // 현재 직무
  const [job, setJob] = useState('')

  // 유효성 검사
  const [isAboutMe, setIsAboutMe] = useState<boolean>(false)
  const [isSkill, setIsSkill] = useState<boolean>(false)

  const router = useRouter()

  // 직무선택
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

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(`자기소개: ${aboutMe}, 기술스택: ${skill}, 현재직무: ${job}`)
      try {
        await axios
          .put(
            REGISTER_ABOUT_ME_URL,
            {
              aboutMe: aboutMe,
              skill: skill,
              job: job,
            },
            myConfig
          )
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              router.push('/sign_up/school')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [aboutMe, skill, router, job]
  )

  const onChangeAboutMe = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value)

    if (e.target.value.length) {
      setIsAboutMe(true)
    } else {
      setIsAboutMe(false)
    }
  }, [])

  const onChangeSkill = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value)

    if (e.target.value.length) {
      setIsSkill(true)
    } else {
      setIsSkill(false)
    }
  }, [])

  return (
    <>
      <Back />

      <Title title="자기소개 해주세요!" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <TextFieldProfile
          text="자기소개"
          placeholder="간단하게 자기소개해주세요!"
          type="text"
          onChange={onChangeAboutMe}
        />
        <TextFieldProfile
          text="기술스택"
          placeholder="기술스택을 해시태그로 작성해주세요!"
          type="text"
          onChange={onChangeSkill}
        />

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
          <FootButton
            type="submit"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!(isAboutMe && isSkill && isChecked)}
          >
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default SelfIntroduction

const footButtonWrapper = css`
  position: fixed;
  bottom: 0;
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

const jobList = css`
  div {
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -1px;
    h2 {
      font-size: ${Common.fontSize.fs20};
    }
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
`
