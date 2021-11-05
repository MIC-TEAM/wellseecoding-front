import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { Common } from 'styles/common'
import { useRouter } from 'next/router'
import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import { REGISTER_STATUS_URL } from 'apis'
import Head from 'next/head'

const SomethingJob = () => {
  const router = useRouter()
  // 직업 선택시 다음으로 넘어갈 수 있도록
  const [isChecked, setIsChecked] = useState<boolean>(false)

  // 현재 직업
  const [value, setValue] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
  }, [])

  // 학생
  const onChangeStudent = useCallback(() => {
    const student = document.getElementsByClassName('student')
    const jobArr = student

    if (jobArr) {
      setValue('학생')
      setIsChecked(true)
    }
  }, [])

  // 직장인
  const onChangeWorker = useCallback(() => {
    const worker = document.getElementsByClassName('worker')
    const jobArr = worker

    if (jobArr) {
      setValue('직장인')
      setIsChecked(true)
    }
  }, [])

  // 취준생
  const onChangeJobSeeker = useCallback(() => {
    const jobSeeker = document.getElementsByClassName('jobSeeker')
    const jobArr = jobSeeker

    if (jobArr) {
      setValue('취준생')
      setIsChecked(true)
    }
  }, [])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        await axios
          .put(REGISTER_STATUS_URL, {
            status: value,
          })
          .then((res) => {
            if (res.status === 200) {
              router.push('/sign_up/self_introduction')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [value, router]
  )

  return (
    <>
      <Head>
        <title>어떤 일을 하고 계세요? </title>
        <meta name="description" content="회원가입 이후 정보 입력 페이지입니다." />
      </Head>
      <Back />

      <Title title="어떤 일을 하고 계세요?" className="loginMt" />

      <form css={job} onSubmit={onSubmit}>
        <div>
          <button type="button" className="job student" onClick={onChangeStudent}>
            <img src="/images/signup/job01.svg" alt="학생" />
            <p>학생</p>
          </button>
        </div>

        <div className="row-coloum">
          <button type="button" className="job worker" onClick={onChangeWorker}>
            <img src="/images/signup/job03.svg" alt="직장인" />
            <p>직장인</p>
          </button>

          <button type="button" className="job jobSeeker" onClick={onChangeJobSeeker}>
            <img src="/images/signup/job02.svg" alt="취준생" />
            <p>취준생</p>
          </button>
        </div>

        <div css={footButtonWrapper}>
          <div className="wrap">
            <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} disabled={!isChecked}>
              다음
            </FootButton>
          </div>
        </div>
      </form>
    </>
  )
}

export default SomethingJob

const footButtonWrapper = css`
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

const job = css`
  text-align: center;
  display: grid;
  margin-top: 36px;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  .row-coloum {
    grid-template-columns: auto auto;
    grid-gap: 10px;
    display: grid;
  }
  .job {
    border: 2px solid #efebe8;
    box-sizing: border-box;
    width: 163px;
    height: 163px;
    border-radius: 50%;
    display: inline-block;
    font-weight: 500;
    font-size: ${Common.fontSize.fs20};
    line-height: 28px;
    color: #b6b2b0;
    &:focus {
      border: 2px solid #ff6e35;
      color: #ff6e35;
    }
  }
`
