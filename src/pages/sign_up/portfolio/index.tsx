import Back from 'components/Common/Header/Back'
import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Title from 'components/Common/Title'
import TextFieldProfile from 'components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { REGISTER_LINK_URL } from 'apis'

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

  // 버튼 클릭 시 컴포넌트 추가
  // const [addBox, setAddBox] = useState(0)

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      alert(`name: ${project}, link: ${link}, description: ${desc}`)
      try {
        await axios
          .put(REGISTER_LINK_URL, {
            links: [
              {
                name: project,
                link: link,
                description: desc,
              },
            ],
          })
          .then((res) => {
            console.log('response:', res)
            if (res.status === 200) {
              router.push('/sign_up/profile_upload')
            }
          })
      } catch (err) {
        console.error(err)
      }
    },
    [project, link, desc, router]
  )

  const onChangeProject = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setProject(e.target.value)

    if (e.target.value.length) {
      setIsProject(true)
    } else {
      setIsProject(false)
    }
  }, [])

  const onChangeLink = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)

    if (e.target.value.length) {
      setIsLink(true)
    } else {
      setIsLink(false)
    }
  }, [])

  const onChangeDesc = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value)

    if (e.target.value.length) {
      setIsDesc(true)
    } else {
      setIsDesc(false)
    }
  }, [])

  // 나중에 쓸게요 버튼 : 프로필 업로드 페이지로 이동
  const NextPage = useCallback(() => {
    router.push('/sign_up/profile_upload')
  }, [])

  // 포트폴리오 추가 버튼
  // const PortfolioAdd = useCallback(() => {}, [])

  return (
    <>
      <Back />

      <Title title="포트폴리오를 올려주세요!" className="loginMt" />

      <form css={infoWrap} onSubmit={onSubmit}>
        <section>
          <div css={info} className="portfolioInfo">
            <TextFieldProfile type="text" text="프로젝트 이름" onChange={onChangeProject} />
            <TextFieldProfile type="text" text="링크" onChange={onChangeLink} />
            <TextFieldProfile type="text" text="설명" onChange={onChangeDesc} />
          </div>
        </section>

        <button css={companyAdd} type="button">
          <span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="6.125" width="1.75" height="14" fill="#FF6E35" />
              <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FF6E35" />
            </svg>
          </span>
          <span>포트폴리오 링크 추가</span>
        </button>

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
