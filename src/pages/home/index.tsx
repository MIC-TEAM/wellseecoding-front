import FooterMenu from 'components/Common/FooterMenu'
import ClassList from 'components/Home/ClassList'
import HomeHeader from 'components/Home/Header'
import HomeMain from 'components/Home/Main'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeMain user="칼국수" num={4} />
      <ClassList />
      <FooterMenu />
    </>
  )
}

export default Home
