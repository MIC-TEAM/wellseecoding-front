import { css } from '@emotion/react'
import React from 'react'
import { Common } from 'src/styles/common'

export type Props = {
  text: string
  textOpt?: string
  buttonOpt?: string
}

const WellseeError = ({ text, textOpt, buttonOpt }: Props) => {
  return (
    <div css={errorWrap}>
      <img src="/images/common/404.svg" alt="뒤로가기" />
      <div style={{ marginTop: '20px', fontSize: '20px', textAlign: 'center' }}>
        <p style={{ width: 240 }}>
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

export default WellseeError

const errorWrap = css`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 95vh;
  align-items: center;
  flex-direction: column;
  background: #ffeee7;
`

const footButtonWrapper = css`
  font-size: ${Common.fontSize.fs16};
  margin-top: 30px;
  padding: 16px;
  border-radius: 16px;
  background-color: #ff6e35;
  color: #ffffff;
`
