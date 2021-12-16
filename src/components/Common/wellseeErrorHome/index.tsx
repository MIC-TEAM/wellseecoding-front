import { css } from '@emotion/react'
import React from 'react'
import { Common } from 'src/styles/common'

export type Props = {
  text: string
  textOpt?: string
  buttonOpt?: string
}

const WellseeErrorHome = ({ text, textOpt, buttonOpt }: Props) => {
  return (
    <div css={ErrorOpt}>
      <img src="/images/common/404.svg" alt="뒤로가기" />
      <div style={{ marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>
        <p style={{ width: 210 }}>
          <span>{text}</span>
        </p>
        <br />
        {textOpt && (
          <p style={{ width: 210, fontSize: 14 }}>
            <span>{textOpt}</span>
          </p>
        )}

        {buttonOpt && (
          <div css={footButtonWrapper}>
            <button type="button" onClick={() => (location.href = '/together')}>
              {buttonOpt}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WellseeErrorHome

const ErrorOpt = css`
  background: #ffeee7;
  margin-top: 3em;
  padding-top: 10em;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100%;
  align-items: center;
  flex-direction: column;
  background: #ffeee7;

  @media (max-width: 420px) {
    padding-top: 3em;
  }
`

const footButtonWrapper = css`
  font-size: ${Common.fontSize.fs16};
  margin-top: 30px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ff6e35;
  color: #ffffff;
`
