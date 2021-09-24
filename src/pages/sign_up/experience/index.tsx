import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_WORK_URL } from 'apis'

const Experience = () => {
  const router = useRouter()

  // 프로젝트명, 링크, 설명
  const [role, setRole] = useState<string>('')
  const [technology, setTechnology] = useState<string>('')
  const [years, setYears] = useState<string>('')

  // 유효성 검사
  const [isRole, setIsRole] = useState<boolean>(false)
  const [isTechnology, setIsTechnology] = useState<boolean>(false)
  const [isYears, setIsYears] = useState<boolean>(false)

  const onSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/sign_up/profile_upload')
    try {
      await axios
        .put(REGISTER_WORK_URL, {
          role: role,
          technology: technology,
          years: years,
        })
        .then((res) => {
          console.log(res.data)
        })
    } catch (err) {
      console.error(err)
    }
  }, [])

  const onChangeRole = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 0) {
      setIsRole(true)
    } else {
      setIsRole(false)
    }
  }, [])

  const onChangeTechnology = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 0) {
      setIsTechnology(true)
    } else {
      setIsTechnology(false)
    }
  }, [])

  const onChangeYears = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(e.target.value)
    console.log(e.target.value)

    if (e.target.value.length > 0) {
      setIsYears(true)
    } else {
      setIsYears(false)
    }
  }, [])

  return (
    <>
      <Back />

      <Title title="경력 정보를 적어주세요!" className="loginMt" />

      <form css={infoWrap} onSubmit={onSubmit}>
        <div css={info}>
          <TextFieldProfile type="text" text="역할" onChange={onChangeRole} />
          <TextFieldProfile type="text" text="기술스택" onChange={onChangeTechnology} />
          <TextFieldProfile type="text" text="경력" onChange={onChangeYears} />
        </div>

        <button css={companyAdd}>
          <span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
              <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
            </svg>
          </span>
          <span>회사 추가</span>
        </button>

        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.SKIP}>
            나중에 쓸게요~
          </FootButton>
          <FootButton
            type="button"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!(isRole && isTechnology && isYears)}
          >
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default Experience

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

const info = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;

  &:nth-of-type(1) {
    margin-top: 40px;
  }
`
const infoWrap = css`
  padding: 0 20px;
`

const companyAdd = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  padding: 15px 0;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #ff6e35;
    margin-left: 8px;
  }
`
