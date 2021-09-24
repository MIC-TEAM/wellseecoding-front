import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import axios from 'axios'
import { REGISTER_EDUCATION_URL } from 'apis'

const SelfIntroduction = () => {
  // 학위, 전공, 재학 및 졸업여부
  const [degree, setDegree] = useState<string>('')
  const [major, setMajor] = useState<string>('')
  const [school, setSchool] = useState<boolean>(false)
  const [graduated, setGraduated] = useState<boolean>(false)

  // 유효성 검사
  const [isDegree, setIsDegree] = useState<boolean>(false)
  const [isMajor, setIsMajor] = useState<boolean>(false)
  const [isSchool, setIsSchool] = useState<boolean>(false)
  const [isGraduated, setIsGraduated] = useState<boolean>(false)

  const router = useRouter()

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/sign_up/experience')
    try {
      await axios
        .put(REGISTER_EDUCATION_URL, {
          degree: degree,
          major: major,
          graduated: graduated,
        })
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
    }
  }, [])

  const onChangeDegree = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 1) {
      setIsDegree(true)
    } else {
      setIsDegree(false)
    }
  }, [])

  const onChangeMajor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 1) {
      setIsMajor(true)
    } else {
      setIsMajor(false)
    }
  }, [])

  const onChangeSchool = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === e.target.name) {
      setSchool(true)
      setGraduated(false)
    } else {
      setSchool(false)
      setGraduated(true)
    }
    setIsSchool(true)
  }, [])

  const onChangeGraduated = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === e.target.name) {
      setGraduated(true)
      setSchool(false)
    } else {
      setGraduated(false)
      setSchool(true)
    }
    setIsGraduated(true)
  }, [])

  const NextPage = useCallback(() => {
    router.push('/sign_up/profile_upload')
  }, [])

  return (
    <>
      <Back />

      <Title title="학교 정보를 적어주세요!" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <TextFieldProfile text="학교를 입력해주세요" type="text" onChange={onChangeDegree} />
        <TextFieldProfile text="전공을 입력해주세요" type="text" onChange={onChangeMajor} />

        <div className="ingOrEnd">
          <label htmlFor="school-ing">
            <input type="radio" value="school-ing" name="school-ing" onChange={onChangeSchool} checked={school} />
            재학중
          </label>

          <label htmlFor="school-end">
            <input type="radio" value="school-end" name="school-end" onChange={onChangeGraduated} checked={graduated} />
            졸업
          </label>
        </div>

        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.SKIP} onClick={NextPage}>
            나중에 쓸게요~
          </FootButton>
          <FootButton
            type="submit"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!((isDegree && isMajor && isSchool) || isGraduated)}
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
  padding: 0 20px;
  .ingOrEnd {
    font-size: 20px;
    letter-spacing: -0.6px;
    color: #262626;
    display: flex;
    label {
      display: flex;
      align-items: center;
      &:nth-of-type(1) {
        margin-right: 45px;
      }
      input {
        margin: 0 8px 0 0;
        &:after {
          content: '';
          display: inline-block;
          width: 26px;
          height: 26px;
          border: 1px solid #8b8b8b;
          border-radius: 100%;
          vertical-align: middle;
          cursor: pointer;
        }
        :checked:after {
          border: 1px solid #ff6e35;
          background: #ff6e35;
        }
      }
    }
  }
`
