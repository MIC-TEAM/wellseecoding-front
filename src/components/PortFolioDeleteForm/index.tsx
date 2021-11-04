import { css } from '@emotion/react'

interface IList {
  idx: number
  name: string
  link: string
  description: string
  isDelete: boolean
  onDelete: (idx: number) => void
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23.6668 2.68325L21.3168 0.333252L12.0002 9.64992L2.6835 0.333252L0.333496 2.68325L9.65016 11.9999L0.333496 21.3166L2.6835 23.6666L12.0002 14.3499L21.3168 23.6666L23.6668 21.3166L14.3502 11.9999L23.6668 2.68325Z"
                fill="#999999"
              />
            </svg>
          </button>

          <p>
            <b>프로젝트 이름</b> {props.name}
          </p>
          <p>
            <b>링크</b> {props.link}
          </p>
          <p>
            <b>설명</b> {props.description}
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
