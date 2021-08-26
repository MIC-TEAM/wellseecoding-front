import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextField from 'components/Common/TextField'
import JobButton from 'components/Common/JobButton'
import { Common } from 'styles/common'
import { css } from '@emotion/react'

const SelfIntroduction = () => {
  return (
    <>
      <Back />

      <Title title="자기소개 해주세요!" className="loginMt" />

      <form css={selfWrap}>
        <TextField text="간단하게 자기소개해주세요!" type="text" />
        <TextField text="기술스택을 해시태그로 작성해주세요!" type="text" />

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
      </form>

      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          다음
        </FootButton>
      </div>
    </>
  )
}

export default SelfIntroduction

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

const selfWrap = css`
  margin-top: 1.7em;
  margin-bottom: 20vh;
  padding: 0 20px;
`

const jobList = css`
  margin-top: 3em;
  font-size: ${Common.fontSize.fs20};
`
