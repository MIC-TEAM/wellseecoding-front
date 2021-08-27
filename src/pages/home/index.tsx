import FooterMenu from 'components/Common/FooterMenu'
import ClassList from 'components/Home/ClassList'
import HomeHeader from 'components/Home/Header'
import HomeMain from 'components/Home/Main'
import { css } from '@emotion/react'

const Home = () => {
  return (
    <>
      <HomeHeader />

      <div css={wrap}>
        <HomeMain user="칼국수" num={4} />
        <div className="listWrap">
          <ClassList />
        </div>
      </div>

      <FooterMenu />
    </>
  )
}

export default Home

const wrap = css`
  .listWrap {
    background: #ffeee7;
    padding-bottom: 100px;
  }
`
