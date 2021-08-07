import FootButton from '../../../components/Common/FootButton'
import Back from '../../../components/Common/Header/back'
import Title from '../../../components/Common/Title'
import { css } from '@emotion/react'

const ProfileUpload = () => {
  return (
    <>
      <Back />

      <div css={profileUpload}>
        <Title title="프로필 사진을 올려주세요!" />
      </div>

      <FootButton firstText="올리기 싫어요" secondText="등록하기" className1="whiteBtn" />
    </>
  )
}

export default ProfileUpload

const profileUpload = css`
  margin-top: 1.7em;
`
