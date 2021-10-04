import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

const SignUpProfileUpload = () => {
  const router = useRouter()

  const NextPage = useCallback(() => {
    router.push('/home')
  }, [router])

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const img = e.target.files[0]
    const formData = new FormData()
    formData.append('img', img)
    console.log(formData)
  }

  return (
    <>
      <Back />

      <Title title="프로필 사진을 올려주세요!" className="loginMt" />

      <div>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          name="profile_img"
          onChange={onChange}
        ></input>
      </div>

      <form method="post" encType="multipart/form-data" action="http://foo.bar/upload">
        <input type="file" name="media" />

        <input name="nickname" />
        <input name="website" />
        <input type="submit" value="upload" />
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
