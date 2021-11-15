import Back from 'src/components/Common/Header/Back'
import FootButton, { FootButtonType } from 'src/components/Common/FootButton'
import { css } from '@emotion/react'
import { Common } from 'src/styles/common'
import { useRouter } from 'next/router'

const SignUpProfileStart = () => {
  const router = useRouter()

  const NextHome = () => {
    router.push('/home')
  }

  const NextPage = () => {
    router.push('/sign_up/something_job')
  }

  return (
    <>
      <Back />
      <div css={profileStart}>
        <h2>
          자, 이제 프로필을
          <br /> 만들어봐요~!
        </h2>
        <img src="/images/signup/character.svg" alt="프로필 시작 페이지 캐릭터" />
      </div>
      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP} onClick={NextHome}>
          아 귀찮아요. 나중에 할래요
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION} onClick={NextPage}>
          네~
        </FootButton>
      </div>
    </>
  )
}

export default SignUpProfileStart

const profileStart = css`
  text-align: center;
  height: 100vh;
  justify-content: center;
  align-content: center;
  display: grid;
  text-align: center;
  place-items: center;
  h2 {
    font-size: ${Common.fontSize.title};
    line-height: 31px;
    margin-bottom: 1rem;
  }
`

const footButtonWrapper = css`
  position: absolute;
  bottom: 4.4em;
  left: 0;
  right: 0;
  padding: 0 20px;

  & > button:nth-of-type(1) {
    margin-bottom: 12px;
  }
`
