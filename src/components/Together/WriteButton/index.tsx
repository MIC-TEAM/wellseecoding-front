import { css } from '@emotion/react'
import Link from 'next/link'

const WriteBtn = () => {
  return (
    <button type="button" css={WriteButton}>
      <div className="writeWrap">
        <div className="writeBtnWrap">
          <Link href="/together/write">
            <img src="/images/together/btn_write.svg" alt="게시물 작성하기" />
          </Link>
        </div>
      </div>
    </button>
  )
}

export default WriteBtn

export const WriteButton = css`
  right: 0;
  bottom: 0;
  z-index: 10;
  position: absolute;
  bottom: 100px;

  @media (max-width: 420px) {
    bottom: 100px;
  }

  .writeWrap {
    height: 95%;
    display: grid;
    justify-items: end;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    .writeBtnWrap {
      width: 100%;
      text-align: end;
    }
  }
`
