import FooterMenu from 'src/components/Common/FooterMenu'
import React from 'react'
import TogetherBack from 'src/components/Common/Header/Back'
import WellseeError from 'src/components/Common/wellseeError'

const NotFound = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <TogetherBack text="이전 페이지로" />
        <WellseeError text={'잘못된 접근이에요...'} />
      </div>
      <FooterMenu />
    </>
  )
}

export default NotFound
