import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import PortFolioDeleteForm from 'components/PortFolioDeleteForm'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_LINK_URL } from 'apis'
import { myConfig } from 'sagas'

const Portfolio = () => {
  const router = useRouter()

  // 프로젝트명, 링크, 설명
  const [project, setProject] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  // 유효성 검사
  const [isProject, setIsProject] = useState<boolean>(false)
  const [isLink, setIsLink] = useState<boolean>(false)
  const [isDesc, setIsDesc] = useState<boolean>(false)

  // 포트폴리오 추가 버튼 클릭 시 컴포넌트 추가
  const [inputList, setInputList] = useState<any[]>([])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        await axios
          .put(
            REGISTER_LINK_URL,
            {
              links: inputList,
            },
            myConfig
          )
          .then((res) => {
            console.log('response:', res)
            if (res.status === 200) {
              router.push('/sign_up/completion')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [router, inputList]
  )

  // 프로젝트 이름
  const onChangeProject = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value)

    if (e.target.value.length) {
      setIsProject(true)
    } else {
      setIsProject(false)
    }
  }, [])

  // 링크 (깃허브 또는 결과물 URL)
  const onChangeLink = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)

    if (e.target.value.length) {
      setIsLink(true)
    } else {
      setIsLink(false)
    }
  }, [])

  // 설명
  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)

    if (e.target.value.length) {
      setIsDesc(true)
    } else {
      setIsDesc(false)
    }
  }, [])

  // 나중에 쓸게요 버튼 ---> 완료 페이지로 이동
  const NextPage = useCallback(() => {
    router.push('/sign_up/completion')
  }, [router])

  // 포트폴리오 추가 버튼
  const onAddBtnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()

      // links 배열에 넣어줄 객체
      const newProtfolio = {
        name: project,
        link: link,
        desc: desc,
      }

      setInputList([...inputList, newProtfolio])
      console.log('추가됐습니다.', newProtfolio)
    },
    [inputList, link, project, desc]
  )

  // 삭제 버튼 클릭시
  const onDelete = (idx: number) => {
    const newInput = inputList.filter((item) => item.idx !== idx)
    setInputList(newInput)
  }

  const ExperienceList = inputList.map((data, idx) => (
    <PortFolioDeleteForm
      key={idx}
      idx={data.idx}
      project={data.project}
      link={data.link}
      desc={data.desc}
      isDelete={data.isDelete}
      onDelete={onDelete}
    />
  ))

  return (
    <>
      <Back />

      <Title title="포트폴리오를 올려주세요! (최대 4개)" className="loginMt" />

      <form css={infoWrap} onSubmit={onSubmit}>
        <section>
          <div className="formBox">
            <div css={info} className="portfolioInfo">
              <TextFieldProfile
                type="text"
                name="role"
                value={project}
                text="프로젝트 이름"
                onChange={onChangeProject}
              />
              <TextFieldProfile
                type="text"
                value={link}
                name="technology"
                text="링크 (깃허브 또는 결과물 URL)"
                onChange={onChangeLink}
              />
              <TextFieldProfile type="text" name="years" value={desc} text="설명" onChange={onChangeDesc} />
            </div>

            <div css={companyAddWrap}>
              <button
                css={companyAdd}
                onClick={onAddBtnClick}
                type="submit"
                disabled={!(isProject && isLink && isDesc)}
              >
                <span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
                    <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
                  </svg>
                </span>
                <span>포트폴리오 링크 추가</span>
              </button>
            </div>
          </div>

          <div>{ExperienceList}</div>
        </section>
        <div css={footButtonWrapper}>
          <FootButton type="button" footButtonType={FootButtonType.SKIP} onClick={NextPage}>
            나중에 쓸게요~
          </FootButton>
          <FootButton
            type="submit"
            footButtonType={FootButtonType.ACTIVATION}
            disabled={!(isProject && isLink && isDesc)}
          >
            다음
          </FootButton>
        </div>
      </form>
    </>
  )
}

export default Portfolio

const footButtonWrapper = css`
  position: fixed;
  bottom: 4rem;
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
