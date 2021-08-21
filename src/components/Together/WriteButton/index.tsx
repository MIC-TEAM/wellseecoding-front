import { css } from '@emotion/react'
import Link from 'next/link'

const WriteBtn = () => {
  return (
    <button type="button" css={WriteButton}>
      <div className="writeWrap">
        <Link href="/together/write">
          <img src="/images/together/btn_write.svg" alt="게시물 작성하기" />
        </Link>
      </div>
    </button>
  )
}

export default WriteBtn

export const WriteButton = css`
  width: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
  position: fixed;
  bottom: 90px;
  .writeWrap {
    display: grid;
    justify-items: end;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`
