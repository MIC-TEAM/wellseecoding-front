import FooterMenu from 'components/Common/FooterMenu'
import Profile from 'components/MyPage/Profile'
import School from 'components/MyPage/School'
import { css } from '@emotion/react'
import Portfolio from 'components/MyPage/Portfolio'
import Career from 'components/MyPage/Career'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { useEffect, useState } from 'react'
import { FETCHING_MYPAGE_REQUEST } from 'reducers/mypage'
import axios from 'axios'

const MyPage = () => {
  const { myPages } = useSelector((state: RootState) => state.mypage)
  /* 로컬 스토리지에서 가져온 사용자 이름 */
  const [name, setName] = useState<string | null>('')
  /* 로컬 스토리지에서 토큰을 꺼낸뒤 실행하기 위한 블로킹 처리 */
  const [tokenState, setTokenState] = useState<boolean>(false)

  const dispatch = useDispatch()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      /* 토큰 꺼내기 */
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
      /* 이름 설정하기 */
      setName(localStorage.getItem('userName'))
      /* 정상처리 된다면 token 상태 true로 바꾸기 */
      setTokenState(true)
    }
  }, [])

  useEffect(() => {
    /* myPage가 빈 배열이고, 토큰상태가 충족될 때 request 보내기 */
    if (!myPages.length && tokenState) {
      dispatch({
        type: FETCHING_MYPAGE_REQUEST,
      })
    }
  }, [dispatch, tokenState])

  return (
    <>
      <Head>
        <title>마이 페이지 | wellseecoding</title>
        <meta name="description" content="마이페이지 입니다." />
      </Head>
      <main css={mypageWrap}>
        {myPages.length ? (
          myPages.map((v, i) => (
            <div key={i} css={profilePadding}>
              <div css={moreWrap}>
                <Profile name={name} job={v.job} nowJob={v.status} skill={v.tags} aboutme={v.aboutMe} />

                {v.educations.map((v, i) => (
                  <div key={i}>
                    <School degree={v.degree} major={v.major} graduated={v.graduated} />
                  </div>
                ))}

                {v.links.map((link, i) => (
                  <div key={i}>
                    <Portfolio name={link.name} link={link.link} description={link.description} />
                  </div>
                ))}

                {v.works.map((v, i) => (
                  <div key={i}>
                    <Career totalYear="5년" company={v.role} job={v.technology} year={v.years} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </main>

      <FooterMenu />
    </>
  )
}

export default MyPage

const mypageWrap = css`
  margin-bottom: 100px;
`

const profilePadding = css`
  padding: 40px 20px 0;
  position: relative;
  &::before {
    position: absolute;
    content: '';
    background: #ff6e35;
    height: 200px;
    width: 100%;
    z-index: -100;
    left: 0;
    top: 0;
  }
`

const moreWrap = css`
  padding: 0 20px;
`
