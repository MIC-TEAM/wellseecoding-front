import { css } from '@emotion/react'
import { studyArr1, studyArr2, studyArr3 } from 'apis/dummyData'
import StudySection from 'components/Home/StudySection'

function ClassList() {
  return (
    <main css={ClassListWrap}>
      <StudySection title="내가 개설한 모임" data={studyArr1} />
      <StudySection title="가입 신청한 모임" data={studyArr2} />
      <StudySection title="가입 승인된 모임" data={studyArr3} />
    </main>
  )
}

export default ClassList

export const ClassListWrap = css`
  width: 100%;
  background: #ffeee7;
  height: 100vh;
  margin-top: -45px;
  z-index: 100;
`

export const studyContentListWrap = css`
  display: flex;
  position: relative;
`

export const studyContentList = css`
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  margin-right: 0;
  flex-wrap: nowrap;
  display: flex;
`
