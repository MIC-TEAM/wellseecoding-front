import { useState, useCallback, useEffect } from 'react'
import SignupDeleteForm from 'components/SignupDeleteForm'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import { css } from '@emotion/react'
import Title from 'components/Common/Title'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_YEARS_REQUEST, updateYearsRequest } from 'reducers/mypage'
import Head from 'next/head'
import { RootState } from 'reducers'
import useInputs from 'hooks/useInput'

interface IinputList {
  idx: number
  role: string
  technology: string
  years: number | string
  isDelete: boolean
}

function ExperienceUpdate({ match }: any) {
  const dispatch = useDispatch()
  const { updateYearsSuccess, myPages } = useSelector((state: RootState) => state.mypage)
  const [state, onChangeInput] = useInputs({
    editRole: myPages.editRole,
  })
  const { editRole, editTechnology, editYears } = state
  const getPostData = () => dispatch(updateYearsSuccess(match.params.id))

  useEffect(() => {
    getPostData()
  }, [dispatch])

  // 회사추가 할 때마다 생성되는 컴포넌트에 대한 배열
  const [inputList, setInputList] = useState<IinputList[]>([])

  // 다음버튼 클릭시
  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      dispatch(updateYearsRequest())
    },
    [inputList, dispatch]
  )

  // 회사 추가 버튼 클릭시
  const onAddBtnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault() // 페이지 전환 막기

    const newExperence = {
      idx: Date.now(),
      role: editRole,
      technology: editTechnology,
      years: editYears,
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
                  value={editRole}
                  text="역할을 입력해주세요"
                  onChange={onChangeInput}
                />
                <TextFieldProfile
                  type="text"
                  value={editTechnology}
                  name="technology"
                  text="기술스택을 입력해주세요"
                  onChange={onChangeInput}
                />
                <TextFieldProfile
                  type="number"
                  name="years"
                  value={editYears}
                  text="경력을 입력해주세요 (숫자로만 기재)"
                  onChange={onChangeInput}
                />
              </div>

              <div css={companyAddWrap}>
                <button css={companyAdd} onClick={onAddBtnClick} type="submit">
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
