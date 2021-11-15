import { css } from '@emotion/react'
import usehandleOverFlow from 'src/hooks/useHandleOverflow'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CLOSE_EDITMODE } from 'src/reducers/common'
import { Common } from 'src/styles/common'

type Props = {
  text: string
}

function EditBack({ text }: Props) {
  const dispatch = useDispatch()
  const { show } = usehandleOverFlow()

  const closeModal = useCallback(() => {
    show()
    dispatch({
      type: CLOSE_EDITMODE,
    })
  }, [show, dispatch])

  return (
    <header css={backHeader}>
      <button type="button" onClick={closeModal}>
        <img src="/images/header/back.svg" alt="뒤로가기" />
      </button>
      <h1>{text}</h1>
    </header>
  )
}

export default EditBack

EditBack.defaultProps = {
  text: '',
}

const backHeader = css`
  width: 100%;
  text-align: left;
  position: sticky;
  background: #fff;
  /* top: 0; */
  padding: 0 20px;
  display: flex;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-weight: 500;
    font-size: ${Common.fontSize.fs20};
    line-height: 28px;
    letter-spacing: -0.4px;
    color: #262626;
    margin-left: -30px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`
