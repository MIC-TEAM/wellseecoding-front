import React from 'react'

export type Props = {
  text: string
}

const WellseeError = ({ text }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        height: '95vh',
        alignItems: 'center',
        flexDirection: 'column',
        background: '#ffeee7',
      }}
    >
      <img src="/images/common/404.svg" alt="뒤로가기" />
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <p>
          <span>{text}</span>
        </p>
      </div>
    </div>
  )
}

export default WellseeError
