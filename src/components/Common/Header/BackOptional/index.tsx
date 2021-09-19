/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { SET_ISMODAL } from 'reducers/common'
import { Common } from 'styles/common'

type Props = {
  title: string | null
  optional: boolean
  // 로컬 스토리지에 저장된 내 id
  localId: number | null
  userId: any
  // 게시글의 고유 id
  uniqId?: string | string[] | undefined
}

function BackOptional({ title, optional, localId, userId, uniqId }: Props) {
  const router = useRouter()
  const dispatch = useDispatch()

  const setModal = useCallback(() => {
    dispatch({
      type: SET_ISMODAL,
      data: uniqId,
    })
  }, [dispatch])

  return (
    <>
      <header css={backHeader}>
        <button type="button" className="back" onClick={() => router.back()}>
          <img src="/images/header/back.svg" alt="뒤로가기" />
        </button>
        <h1>{title ? title : ''}</h1>
        {optional && (
          <div>
            {/* 옵션이 존재하면서, 로컬 스토리지에 존재하는 아이디와 게시글의 유저아이디가 같은 경우에는 환경설정 버튼이 뜨도록 조건을 준다 */}
            {localId === userId ? (
              <button type="button" onClick={setModal}>
                <img src="/images/header/setting.svg" alt="환경설정" />
              </button>
            ) : (
              <button type="button">
                <img src="/images/header/heart.svg" alt="좋아요" onClick={() => alert('좋아요')} />
              </button>
            )}
          </div>
        )}
      </header>
    </>
  )
}

export default BackOptional

const backHeader = css`
  width: 100%;
  text-align: left;
  position: sticky;
  left: 0;
  display: flex;
  top: 0;
  background: #fff;
  align-items: center;
  z-index: 9999;
  border-bottom: 1px solid #d3cfcc;
  .back {
    padding-left: 20px;
  }
  h1 {
    font-size: ${Common.fontSize.fs20};
    letter-spacing: -0.4px;
    font-weight: 500;
    line-height: 28px;
    margin-left: -20px;
  }

  div {
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    button {
      align-items: center;
      img {
        margin-right: 20px;
      }
    }
  }
`
