import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import axios from 'axios'
import { REGISTER_EDUCATION_URL } from 'apis'

const SelfIntroduction = () => {
  const [degree, setDegree] = useState<string>('')
  const [major, setMajor] = useState<string>('')
  const [graduated, setGraduated] = useState<boolean>(false)
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    setGraduated(true)
    setDisabled(true)
    router.push('/sign_up/experience')
  }, [])

  const onChangeDegree = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDegree(e.target.value)
    console.log(e.target.value)
  }, [])

  const onChangeMajor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setMajor(e.target.value)
    console.log(e.target.value)
  }, [])

  return (
    <>
      <Back />

      <Title title="학교 정보를 적어주세요!" className="loginMt" />

      <form css={selfWrap} onSubmit={onSubmit}>
        <TextFieldProfile text="학위" type="text" onChange={onChangeDegree} />
        <TextFieldProfile text="전공" type="text" onChange={onChangeMajor} />

        <RadioGroup row aria-label="school" name="school" defaultValue="top" style={{ marginTop: '2em' }}>
          <FormControlLabel value="school-ing" control={<Radio color="primary" />} label="재학 중" />
          <FormControlLabel value="school-end" control={<Radio color="primary" />} label="졸업" />
        </RadioGroup>

        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.SKIP}>
            나중에 쓸게요~
          </FootButton>
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

  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const selfWrap = css`
  margin-top: 1.7em;
  padding: 0 20px;
`
