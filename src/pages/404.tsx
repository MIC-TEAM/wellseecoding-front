import FooterMenu from 'components/Common/FooterMenu'
import React from 'react'
import TogetherBack from 'components/Common/Header/Back'

const NotFound = () => {
  return (
    <>
      <div style={{ width: '100%' }}>
        <TogetherBack text="이전 페이지로" />
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '90vh',
            alignItems: 'center',
            flexDirection: 'column',
            background: '#ffeee7',
          }}
        >
          <img src="/images/common/404.svg" alt="뒤로가기" />
          <div style={{ marginTop: '20px', fontSize: '20px' }}>
            <p>
              <span>잘못된 접근이에요</span>
            </p>
          </div>
        </div>
      </div>
      <FooterMenu />
    </>
  )
}

export default NotFound
