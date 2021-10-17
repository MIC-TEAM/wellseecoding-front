/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CLOSE_EDITMODE, CLOSE_ISMODAL, OPEN_ISMODAL } from 'reducers/common'
import { myConfig } from 'sagas'
import { Common } from 'styles/common'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
  title: string | null
  optional: boolean
  // 로컬 스토리지에 저장된 내 id
  localId?: number | null
  // post로부터 불러오는 id
  userId?: number
  // 게시글의 고유 id
  uniqId?: string | string[] | undefined
}

function BackOptional({ title, optional, localId, userId, uniqId }: Props) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [heartState, setHeartState] = useState(false)

  useEffect(() => {
    console.log('heartState:', heartState)
  }, [heartState])

  const setModal = useCallback(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: OPEN_ISMODAL,
      data: uniqId,
    })
  }, [dispatch, uniqId])

  const stopWholeTasks = useCallback(() => {
    Promise.allSettled([
      dispatch({
        type: CLOSE_ISMODAL,
      }),
      dispatch({
        type: CLOSE_EDITMODE,
      }),
    ]).then(() => router.back())
  }, [dispatch, router])

  const unLike = useCallback(async () => {
    try {
      alert(`유저 정보 ${localId}번 님이 ${uniqId}번 게시글 좋아요를 취소합니다`)
      await axios
        .delete('api/v1/users/likes', {
          headers: myConfig,
          data: {
            postId: uniqId,
          },
        })
        .then((res) => (res.status === 200 ? setHeartState(false) : alert('잘못된 요청입니다!')))
    } catch (err) {
      console.log(err)
    }
  }, [localId, uniqId])

  const onLike = useCallback(async () => {
    try {
      alert(`유저 정보 ${localId}번 님이 ${uniqId}번 게시글을 좋아합니다`)
      await axios
        .post(
          '/api/v1/users/likes',
          {
            postId: uniqId,
          },
          myConfig
        )
        .then((res) => (res.status === 200 ? setHeartState(true) : alert('잘못된 요청입니다!')))
    } catch (err) {
      console.log(err)
    }
  }, [localId, uniqId])

  return (
    <>
      <header css={backHeader}>
        <button type="button" className="back" onClick={() => stopWholeTasks()}>
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
              <>
                {heartState ? (
                  <button type="button" onClick={unLike}>
                    <img src="/images/header/FilledHeart.svg" alt="좋아요" />
                  </button>
                ) : (
                  <button type="button" onClick={onLike}>
                    <img src="/images/header/heart.svg" alt="좋아요" />
                  </button>
                )}
              </>
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
