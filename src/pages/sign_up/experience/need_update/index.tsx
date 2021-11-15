import { useState, useCallback, useEffect } from 'react'
import SignupDeleteForm from 'components/SignupDeleteForm'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import Title from 'components/Common/Title'
import { REGISTER_WORK_URL } from 'apis'
import axios from 'axios'
import Head from 'next/head'

interface IinputList {
  idx: number
  role: string
  technology: string
  years: number | string
  isDelete: boolean
}

type Props = {
  PropRole: string
  PropTech: string
  PropYears: number
}

function ExperienceUpdate({ PropRole, PropTech, PropYears }: Props) {
  // 회사추가 할 때마다 생성되는 컴포넌트에 대한 배열
  const [inputList, setInputList] = useState<IinputList[]>([])

  // 프로젝트명, 링크, 설명
  const [role, setRole] = useState<string>(PropRole)
  const [technology, setTechnology] = useState<string>(PropTech)
  const [years, setYears] = useState<number | string>(PropYears)

  const [editRole] = useState<string>(PropRole)
  const [editTech] = useState<string>(PropTech)
  const [editYears] = useState<number>(PropYears)

  // 유효성 검사
  const [isRole, setIsRole] = useState<boolean>(false)
  const [isTechnology, setIsTechnology] = useState<boolean>(false)
  const [isYears, setIsYears] = useState<boolean>(false)

  useEffect(() => {
    if (PropRole && PropTech && PropYears) {
      setIsRole(true)
      setIsTechnology(true)
      setIsYears(true)
    }
  }, [PropRole, PropTech, PropYears])

  // 역할
  const onChangeRole = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value)
    if (e.target.value.length) {
      setIsRole(true)
    } else {
      setIsRole(false)
    }
  }, [])

  // 기술스택
  const onChangeTechnology = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTechnology(e.target.value)
    if (e.target.value.length) {
      setIsTechnology(true)
    } else {
      setIsTechnology(false)
    }
  }, [])

  // 경력
  const onChangeYears = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setYears(parseInt(e.target.value))
    if (e.target.value.length) {
      setIsYears(true)
    } else {
      setIsYears(false)
    }
  }, [])

  // 다음버튼 클릭시
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        await axios
          .put(REGISTER_WORK_URL, {
            works: inputList,
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
    [inputList]
  )

  // 회사 추가 버튼 클릭시
  const onAddBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault() // 페이지 전환 막기
    setRole('')
    setTechnology('')
    setYears('')

    const newExperence = {
      idx: Date.now(),
      role: role,
      technology: technology,
      years: years,
      isDelete: false,
    }

    setInputList(inputList.concat(newExperence))
  }
  const onDelete = (idx: number) => {
    const newInput = inputList.filter((item) => item.idx !== idx)
    setInputList(newInput)
  }
  const ExperienceList = inputList.map((data, idx) => (
    <SignupDeleteForm
      key={idx}
      idx={data.idx}
      role={data.role}
      technology={data.technology}
      years={data.years}
      isDelete={data.isDelete}
      onDelete={onDelete}
    />
  ))
  return (
    <div>
      <Head>
        <title>경력 정보를 적어주세요 </title>
        <meta name="description" content="회원가입 이후 정보 입력 페이지입니다." />
      </Head>
      <Back />

      <Title title="경력 정보를 적어주세요!" className="loginMt" />
      <div>
        <form onSubmit={onSubmit} css={infoWrap}>
          <section>
            <div className="formBox">
              <div css={info} id="experienceInputBox">
                <TextFieldProfile
                  type="text"
                  name="role"
                  value={role}
                  text="역할을 입력해주세요"
                  onChange={onChangeRole}
                />
                <TextFieldProfile
                  type="text"
                  value={technology}
                  name="technology"
                  text="기술스택을 입력해주세요"
                  onChange={onChangeTechnology}
                />
                <TextFieldProfile
                  type="number"
                  name="years"
                  value={years}
                  text="경력을 입력해주세요 (숫자로만 기재)"
                  onChange={onChangeYears}
                />
              </div>

              <div css={companyAddWrap}>
                <button
                  css={companyAdd}
                  onClick={onAddBtnClick}
                  type="submit"
                  disabled={!(isRole && isTechnology && isYears)}
                >
                  <span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
                      <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
                    </svg>
                  </span>
                  <span>등록 하기</span>
                </button>
              </div>
            </div>

            <div>{ExperienceList}</div>
            <SignupDeleteForm
              key={1}
              idx={1}
              role={editRole}
              technology={editTech}
              years={editYears}
              isDelete={true}
              onDelete={onDelete}
            />
          </section>

          <div css={footButtonWrapper}>
            <div className="wrap">
              <FootButton type="submit" footButtonType={FootButtonType.ACTIVATION} disabled={!inputList.length}>
                다음
              </FootButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

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

const info = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;

  &:nth-of-type(1) {
    margin-top: 3rem;
  }
`
const infoWrap = css`
  padding: 0 20px 1rem 20px;
  section {
    margin-bottom: 250px;
  }
  .delete {
    font-size: 30px;
    float: right;
  }
`

const companyAddWrap = css`
  button:disabled,
  button[disabled] {
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #eee;
    span {
      color: #d3cfcc;
      svg {
        rect {
          fill: #d3cfcc;
        }
      }
    }
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
  margin-bottom: 3rem;
  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.6px;
    color: #ff6e35;
    margin-left: 8px;
  }
`

export default ExperienceUpdate
