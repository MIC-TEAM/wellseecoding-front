import FooterMenu from 'components/Common/FooterMenu'
import Profile from 'components/MyPage/Profile'
import School from 'components/MyPage/School'
import { css } from '@emotion/react'
import Portfolio from 'components/MyPage/Portfolio'
import Career from 'components/MyPage/Career'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { useEffect } from 'react'
import { FETCHING_MYPAGE_REQUEST } from 'reducers/mypage'

const MyPage = () => {
  const { myPages } = useSelector((state: RootState) => state.mypage)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('myPages----->', myPages)
  }, [myPages])

  useEffect(() => {
    if (!myPages.length) {
      dispatch({
        type: FETCHING_MYPAGE_REQUEST,
      })
    }
  }, [dispatch])

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
                <Profile name="칼국수" job={v.job} nowJob={v.status} skill={v.tags} aboutme={v.aboutMe} />

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
