import { box } from './style'

interface AboutMeProps {
  aboutmeText: string
}

const AboutMe = (props: AboutMeProps) => {
  return (
    <section css={box}>
      <h2>자기소개</h2>
      <p>{props.aboutmeText}</p>
    </section>
  )
}

export default AboutMe
