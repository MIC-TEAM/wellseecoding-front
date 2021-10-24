import FooterMenu from 'components/Common/FooterMenu'
import { css } from '@emotion/react'
import Profile from 'components/MyPage/Profile'
import AboutMe from 'components/MyPage/AboutMe'
import Portfolio from 'components/MyPage/Portfolio'
import Career from 'components/MyPage/Career'
import LikePost from 'components/MyPage/LikePost'
import Head from 'next/head'

const MyPage = () => {
  return (
    <>
      <Head>
        <title>마이 페이지 | wellseecoding</title>
        <meta name="description" content="마이 페이지입니다." />
      </Head>
      <main css={mypageWrap}>
        <div css={profilePadding}>
          <Profile
            name="칼국수"
            job="프론트엔드"
            nowJob="직장인"
            nowCareer="2년차"
            skill={['#자바스크립트 ', '#리액트 ', '#MySql ', '#스프링 ', '#파이썬']}
          />
        </div>

        <div css={moreWrap}>
          <AboutMe aboutmeText="신기술을 배우는 걸 좋아하고 다른 사람과 협업이 원활합니다. 4개의 사이드프로젝트 경험해보며 출시/운영 경험이 있습니다. 현재 ~~~, ~~~를 주로 사용하고 있으며 ~~~언어에도 관심이 있습니다. " />
          <Portfolio result="https://www.instagram.com/explore/tags/" />
          <Career totalYear="5년" company="크래프톤" job="프론트" year="1년 5개월" />
          <LikePost likepost="[서울] 취업용 프로젝트 같이하실 분  모집합니다." />
        </div>
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
