import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

const SignUpProfileUpload = () => {
  const router = useRouter()
  const [imgLoading, setImgLoading] = useState(false)

  const NextPage = useCallback(() => {
    router.push('/sign_up/completion')
  }, [router])

  const onChangeProfile = async (e: any) => {
    setImgLoading(true)
    const formData = new FormData()
    formData.append('file', e.target.files[0])

    setImgLoading(false)
  }

  return (
    <>
      <Back />

      <Title title="프로필 사진을 올려주세요!" className="loginMt" />

      <form css={profileFrom}>
        {imgLoading ? (
          <input type="file" accept="image/*" name="profile_img" onChange={onChangeProfile} />
        ) : (
          <button type="button">
            <img src="/images/signup/profile.svg" alt="프로필 업로드" />
          </button>
        )}
      </form>

      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP} onClick={NextPage}>
          올리기 싫어요
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          등록하기
        </FootButton>
      </div>
    </>
  )
}

export default SignUpProfileUpload

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 11px;
  }
`

const profileFrom = css`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 4rem;
`
