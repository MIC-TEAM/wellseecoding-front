import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import JobButton from 'components/Common/JobButton'
import { Common } from 'styles/common'
import { css } from '@emotion/react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_ABOUT_ME_URL, REGISTER_WORK_URL } from 'apis'

const SelfIntroduction = () => {
  // 자기소개, 스킬, 직무
  const [aboutMe, setAboutMe] = useState<string>('')
  const [skill, setSkill] = useState<string>('')
  // const [job, setJob] = useState<boolean>(false)
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await axios
        .put(REGISTER_ABOUT_ME_URL, {
          aboutMe: aboutMe,
        })
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
    }

    try {
      await axios
        .put(REGISTER_WORK_URL, {
          technology: skill,
        })
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
    }
    setDisabled(true)
    router.push('/sign_up/profile_start')
  }, [])

  const onChangeAboutMe = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value)
    console.log(e.target.value)
  }, [])

  const onChangeSkill = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value)
    console.log(e.target.value)
  }, [])

  return (
    <>
      <Back />

      <Title title="자기소개 해주세요!" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <TextFieldProfile text="간단하게 자기소개해주세요!" type="text" onChange={onChangeAboutMe} />
        <TextFieldProfile text="기술스택을 해시태그로 작성해주세요!" type="text" onChange={onChangeSkill} />

        <div css={jobList}>
          <h2>직무</h2>
          <JobButton job_text="서버/백엔드" />
          <JobButton job_text="프론트엔드" />
          <JobButton job_text="웹 풀스택" />
          <JobButton job_text="모바일 앱" />
          <JobButton job_text="게임 서버" />
          <JobButton job_text="게임 클라이언트" />
          <JobButton job_text="데이터 엔지니어(DBA)" />
          <JobButton job_text="개발 매니저(PM)" />
          <JobButton job_text="devops/시스템 엔지니어" />
          <JobButton job_text="보안" />
          <JobButton job_text="QA" />
          <JobButton job_text="인공지능/머신러닝" />
          <JobButton job_text="HW/임베디드" />
          <JobButton job_text="SW/솔루션" />
        </div>

        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.ACTIVATION} disabled={!disabled}>
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default SelfIntroduction

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

const selfWrap = css`
  margin-top: 1.7em;
  margin-bottom: 20vh;
  padding: 0 20px;
`

const jobList = css`
  margin-top: 3em;
  font-size: ${Common.fontSize.fs20};
`
