import { css } from '@emotion/react'
import { HiX } from 'react-icons/Hi'

interface IList {
  idx: number
  name: string
  link: string
  desc: number
  isDelete: boolean
  onDelete: any
}

function PortFolioDeleteForm(props: IList) {
  const handleDelete = () => {
    props.onDelete(props.idx)
  }

  return (
    <div css={infoWrap}>
      {props.idx !== 0 && !props.isDelete && (
        <div css={info} id="InputBox" className="newForm">
          <button type="button" className="delete" onClick={handleDelete}>
            <HiX />
          </button>

          <p>
            <b>프로젝트 이름</b> {props.name}
          </p>
          <p>
            <b>링크</b> {props.link}
          </p>
          <p>
            <b>설명</b> {props.desc}
          </p>
        </div>
      )}
    </div>
  )
}

export default PortFolioDeleteForm

const info = css`
  background: #ffffff;
  border: 1px solid #ffeee7;
  box-sizing: border-box;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 18px;
  padding: 26px;
  p {
    font-size: 2rem;
    margin-bottom: 22px;
    color: #444;
    &:nth-of-type(1) {
      margin-top: 44px;
    }
    b {
      font-weight: 600;
    }
  }
`

const infoWrap = css`
  padding: 0.5rem 0;
  .formBox {
    margin-bottom: 250px;
  }
  .delete {
    font-size: 30px;
    float: right;
    color: #444;
  }
`
