import FootButton, { FootButtonType } from 'components/Common/FootButton'
import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import TextField from 'components/Common/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { css } from '@emotion/react'

const SelfIntroduction = () => {
  return (
    <>
      <Back />

      <Title title="학교 정보를 적어주세요!" className="loginMt" />

      <form css={selfWrap}>
        <TextField text="학위" type="text" />
        <TextField text="전공" type="text" />

        <RadioGroup row aria-label="school" name="school" defaultValue="top" style={{ marginTop: '2em' }}>
          <FormControlLabel value="school-ing" control={<Radio color="primary" />} label="재학 중" />
          <FormControlLabel value="school-end" control={<Radio color="primary" />} label="졸업" />
        </RadioGroup>
      </form>
      <div css={footButtonWrapper}>
        <FootButton type="button" footButtonType={FootButtonType.SKIP}>
          나중에 쓸게요~
        </FootButton>
        <FootButton type="button" footButtonType={FootButtonType.ACTIVATION}>
          다음
        </FootButton>
      </div>
    </>
  )
}

export default SelfIntroduction

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

const selfWrap = css`
  margin-top: 1.7em;
  padding: 0 20px;
`
