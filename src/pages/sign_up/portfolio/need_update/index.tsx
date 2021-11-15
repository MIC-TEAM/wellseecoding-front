import FootButton, { FootButtonType } from 'src/components/Common/FootButton'
import TextFieldProfile from 'src/components/Common/TextFieldProfile'
import { css } from '@emotion/react'
import { useCallback, useEffect, useState } from 'react'
import PortFolioDeleteForm from 'src/components/PortFolioDeleteForm'
import axios from 'axios'
import { REGISTER_LINK_URL } from 'src/apis'
import Head from 'next/head'

interface IinputList {
  idx: number
  name: string
  link: string
  description: string
  isDelete: boolean
}

type Props = {
  PropDesc: string
  PropLink: string
  PropName: string
}

const PortfolioUpdate = ({ PropDesc, PropLink, PropName }: Props) => {
  // 프로젝트명, 링크, 설명
  const [name, setName] = useState<string>(PropName)
  const [link, setLink] = useState<string>(PropLink)
  const [desc, setDesc] = useState<string>(PropDesc)

  // 프로젝트명, 링크, 설명
  const [editName] = useState<string>(PropName)
  const [editLink] = useState<string>(PropLink)
  const [editDesc] = useState<string>(PropDesc)

  // 유효성 검사
  const [isProject, setIsProject] = useState<boolean>(false)
  const [isLink, setIsLink] = useState<boolean>(false)
  const [isDesc, setIsDesc] = useState<boolean>(false)

  // 포트폴리오 추가 버튼 클릭 시 컴포넌트 추가
  const [inputList, setInputList] = useState<IinputList[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
    }
  }, [])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        await axios
          .put(REGISTER_LINK_URL, {
            links: inputList,
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

  // 프로젝트 이름
  const onChangeProject = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)

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

  // 포트폴리오 추가 버튼
  const onAddBtnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setName('')
      setLink('')
      setDesc('')

      const newExperence = {
        idx: Date.now(),
        name: name,
        link: link,
        description: desc,
        isDelete: false,
      }

      setInputList(inputList.concat(newExperence))
    },
    [inputList, link, name, desc]
  )

  // 삭제 버튼 클릭시
  const onDelete = (idx: number) => {
    const newInput = inputList.filter((item) => item.idx !== idx)
    setInputList(newInput)
  }

  const PortFolioList = inputList.map((data, idx) => (
    <PortFolioDeleteForm
      key={idx}
      idx={data.idx}
      name={data.name}
      link={data.link}
      description={data.description}
      isDelete={data.isDelete}
      onDelete={onDelete}
    />
  ))

  return (
    <>
      <Head>
        <title>포트폴리오를 올려주세요 </title>
        <meta name="description" content="회원가입 이후 정보 입력 페이지입니다." />
      </Head>

      <form css={infoWrap} onSubmit={onSubmit}>
        <section>
          <div className="formBox">
            <div css={info} className="portfolioInfo">
              <TextFieldProfile type="text" name="name" value={name} text="프로젝트 이름" onChange={onChangeProject} />
              <TextFieldProfile
                type="text"
                name="link"
                value={link}
                text="링크 (깃허브 또는 결과물 URL)"
                onChange={onChangeLink}
              />
              <TextFieldProfile type="text" name="desc" value={desc} text="설명" onChange={onChangeDesc} />
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
                <span>등록 하기</span>
              </button>
            </div>
          </div>
          <div>{PortFolioList}</div>
          <PortFolioDeleteForm
            key={1}
            idx={1}
            name={editName}
            link={editLink}
            description={editDesc}
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
    </>
  )
}

export default PortfolioUpdate

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
  & > button:nth-of-type(1) {
    margin-bottom: 11px;
    margin-top: 20px;
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
