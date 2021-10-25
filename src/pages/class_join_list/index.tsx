import { css } from '@emotion/react'
import JoinHeader from 'components/Common/Header/Back'
import Head from 'next/head'

const ClassJoinList = () => {
  return (
    <div>
      <Head>
        <title>가입 현황 | wellseecoding</title>
      </Head>
      <JoinHeader text="가입신청 목록" />

      <ul css={Classjoin}>
        <li>
          <img src="/images/common/joinProfile.svg" alt="프로필사진" />
          <div>
            <h4>이름</h4>
            <p>#개발 매니저(PM)</p>
          </div>
          <button type="button">승인</button>
        </li>

        <li>
          <img src="/images/common/joinProfile.svg" alt="프로필사진" />
          <div>
            <h4>이름</h4>
            <p>#개발 매니저(PM)</p>
          </div>
          <button type="button">승인</button>
        </li>

        <li>
          <img src="/images/common/joinProfile.svg" alt="프로필사진" />
          <div>
            <h4>이름</h4>
            <p>#개발 매니저(PM)</p>
          </div>
          <button type="button">승인</button>
        </li>

        <li>
          <img src="/images/common/joinProfile.svg" alt="프로필사진" />
          <div>
            <h4>이름</h4>
            <p>#개발 매니저(PM)</p>
          </div>
          <button type="button">승인</button>
        </li>
      </ul>
    </div>
  )
}

export default ClassJoinList

const Classjoin = css`
  li {
    padding: 15px 20px;
    display: grid;
    grid-template-columns: 1.3fr 5fr 1fr;
    align-items: center;
    &:nth-of-type(1) {
      margin-top: 10px;
    }
    div {
      margin-left: 1em;
    }
    button {
      padding: 6px 16px;
      border: 1px solid #d3cfcc;
      border-radius: 4px;
      font-size: 1.4rem;
      line-height: 20px;
      letter-spacing: -0.4px;
      color: #444241;
      width: 63px;
    }
    h4 {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 26px;
      letter-spacing: -0.6px;
      color: rgba(0, 0, 0, 0.87);
    }
    p {
      font-size: 1.6rem;
      line-height: 22px;
      letter-spacing: -0.6px;
      color: #ff6e35;
    }
  }
`
