import { box } from './style'
import React, { useCallback } from 'react'
import router from 'next/router'

interface SchoolProps {
  degree: string
  graduated: boolean
  major: string
}

const School = (props: SchoolProps) => {
  const myInfo = JSON.stringify(localStorage.getItem('access_token'))

  const UpdatePage = useCallback(() => {
    router.push('/sign_up/school/update')
  }, [router])

  return (
    <section css={box}>
      <h2>학교정보</h2>
      <p>
        {/* 학위 / 전공 */}
        {props.degree} / {props.major}
      </p>
      {/* 재학여부 */}
      <span className="desc">{props.graduated === true ? <div>졸업</div> : <div>재학중</div>}</span>

      {myInfo ? (
        <button type="button" onClick={UpdatePage}>
          <img src="/images/common/update.svg" alt="수정버튼" />
        </button>
      ) : (
        <div></div>
      )}
    </section>
  )
}

export default School
