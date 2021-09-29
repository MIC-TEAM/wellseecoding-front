import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { HiX } from 'react-icons/Hi'
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

  // 회사 추가 버튼 클릭 시 컴포넌트 추가
  const [inputList, setInputList] = useState<any[]>([])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(`role: ${role}, technology: ${technology}, years: ${years}`)
      try {
        await axios
          .put(REGISTER_WORK_URL, {
            works: [
              {
                role: role,
                technology: technology,
                years: years,
              },
            ],
          })
          .then((res) => {
            console.log(res.data)
            if (res.status === 200) {
              router.push('/sign_up/profile_upload')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [role, technology, years]
  )

  const onChangeRole = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value)

    if (e.target.value.length) {
      setIsRole(true)
    } else {
      setIsRole(false)
    }
  }, [])

  const onChangeTechnology = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value)

    if (e.target.value.length) {
      setIsTechnology(true)
    } else {
      setIsTechnology(false)
    }
  }, [])

  const onChangeYears = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(e.target.value)

    if (e.target.value.length) {
      setIsYears(true)
    } else {
      setIsYears(false)
    }
  }, [])

  // 경력정보 폼박스
  const ExperienceForm = () => {
    return (
      <div css={info} id="experienceInputBox" className="newForm">
        <button type="button" className="delete" onClick={onDeleteBtnClick}>
          <HiX />
        </button>

        <TextFieldProfile type="text" text="역할" onChange={onChangeRole} />
        <TextFieldProfile type="text" text="기술스택" onChange={onChangeTechnology} />
        <TextFieldProfile type="text" text="경력" onChange={onChangeYears} />
      </div>
    )
  }

  // 회사 추가 버튼 클릭시
  const onAddBtnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setInputList(inputList.concat(<ExperienceForm key={inputList.length} />))
    },
    [inputList]
  )

  // 삭제 버튼 클릭시
  const onDeleteBtnClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setInputList(inputList.filter((item, index) => item.index !== index))
  }, [])

  // 나중에 쓸게요 버튼 : 프로필 업로드 페이지로 이동
  const NextPage = useCallback(() => {
    router.push('/sign_up/portfolio')
  }, [])

  return (
    <>
      <Back />

      <Title title="경력 정보를 적어주세요!" className="loginMt" />

      <form css={infoWrap} onSubmit={onSubmit}>
        <div className="formBox">
          <div css={info} id="experienceInputBox">
            <TextFieldProfile type="text" text="역할" onChange={onChangeRole} />
            <TextFieldProfile type="text" text="기술스택" onChange={onChangeTechnology} />
            <TextFieldProfile type="text" text="경력" onChange={onChangeYears} />
          </div>
          {inputList}
          <button css={companyAdd} onClick={onAddBtnClick} type="button">
            <span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
                <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
              </svg>
            </span>
            <span>회사 추가</span>
          </button>
        </div>

        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.SKIP} onClick={NextPage}>
            나중에 쓸게요~
          </FootButton>
          <FootButton
            type="submit"
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
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
  background-color: #fff;
  button:disabled,
  button[disabled] {
    background-color: #d3cfcc;
    color: #ffffff;
  }
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
    margin-top: 20px;
  }
  & > button:nth-of-type(2) {
    margin-bottom: 4.4em;
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
  .formBox {
    margin-bottom: 250px;
  }
  .delete {
    font-size: 30px;
    float: right;
  }
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
