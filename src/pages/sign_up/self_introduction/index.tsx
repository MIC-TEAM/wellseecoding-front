import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_ABOUT_ME_URL, REGISTER_WORK_URL } from 'apis'

const SelfIntroduction = () => {
  // 간단한 자기소개, 기술스택
  const [aboutMe, setAboutMe] = useState<string>('')
  const [skill, setSkill] = useState<string>('')

  // 유효성 검사
  const [isAboutMe, setIsAboutMe] = useState<boolean>(false)
  const [isSkill, setIsSkill] = useState<boolean>(false)

  const router = useRouter()

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/sign_up/school')
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
  }, [])

  const onChangeAboutMe = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 0) {
      setIsAboutMe(true)
    } else {
      setIsAboutMe(false)
    }
  }, [])

  const onChangeSkill = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 0) {
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
        <TextFieldProfile text="간단하게 자기소개해주세요!" type="text" onChange={onChangeAboutMe} />
        <TextFieldProfile text="기술스택을 해시태그로 작성해주세요!" type="text" onChange={onChangeSkill} />

        <div css={footButtonWrapper}>
          <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} disabled={!(isAboutMe && isSkill)}>
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
