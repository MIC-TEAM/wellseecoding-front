import { css } from '@emotion/react'

const Login = () => {
  return (
    <main css={ProfileStart}>
      <h2>자, 이제 프로필을 만들어봐요~!</h2>
      <img src="/images/login/character.svg" alt="프로필" />
    </main>
  )
}

export default Login

const ProfileStart = css`
  display: grid;
  margin: 0 auto;
  width: 100%;
`
