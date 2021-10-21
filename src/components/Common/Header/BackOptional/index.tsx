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
  // router.query.id는 uniqId로 넘겨받고 있는 상황

  const router = useRouter()
  const dispatch = useDispatch()
  const [heartState, setHeartState] = useState(false)

  const [likePost, setLikePost] = useState<number[]>([])

  useEffect(() => {
    console.log('like Post changed:', likePost)
  }, [likePost])

  // ① 로컬 스토리지에 담긴 좋아요한 게시물을 state인 likePost에 저장한다
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('myLikes') || '[]'
      setLikePost(JSON.parse(result))
    }
  }, [])

  // ② likePost가 존재하는 배열일 경우, compareLikeState 함수를 호출한다 (있을 경우에 하트를 채워 표시할 수 있도록)
  useEffect(() => {
    if (likePost.length) {
      compareLikeState()
      // handleUnlikePosts(Number(uniqId))
    }
  }, [likePost])

  // ③ likePost가 변경될 경우, likePost state를 직렬화하여 로컬 스토리지에 myLikes를 재설정한다
  useEffect(() => {
    localStorage.setItem('myLikes', JSON.stringify(likePost))
  }, [likePost])

  const setModal = useCallback(() => {
    window.scrollTo(0, 0)
    dispatch({
      type: OPEN_ISMODAL,
      data: uniqId,
    })
  }, [dispatch, uniqId])

  // 기존 로컬 스토리지와 비교하여 로컬 스토리지 내에 배열에 해당 게시물이 있을 경우 좋아요를 한 것으로 표시한다
  const compareLikeState = () => {
    for (const x of likePost) {
      if (x === Number(uniqId)) {
        setHeartState(true)
        break
      }
    }
  }

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

  const onLike = useCallback(async () => {
    try {
      alert(`유저 정보 ${localId}번 님이 ${uniqId}번 게시글을 좋아합니다`)
      await axios
        .post(
          '/api/v1/users/likes',
          {
            postId: Number(uniqId),
          },
          myConfig
        )
        .then((res) => (res.status === 200 ? concatPost(Number(uniqId)) : alert('잘못된 요청입니다!')))
    } catch (err) {
      console.log(err)
    }
  }, [localId, uniqId])

  // 200 이 떨어지는데 DB에 반영이 안됨

  // 좋아요 요청 성공시, 로컬스토리지에 저장된 myLikes 배열에 좋아요한 데이터를 추가하는 로직
  const concatPost = useCallback((id: number) => {
    console.log('concatPost!')
    setLikePost((likePost) => [...likePost, id])
  }, [])

  // 로컬스토리지에 저장된 myLikes의 배열에서 좋아요를 취소한 데이터를 필터링하는 로직
  const filteringPost = useCallback(async () => {
    try {
      console.log('filtering post!')
      await axios
        .delete('/api/v1/users/likes', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
            Expires: '0',
          },
          data: {
            postId: Number(uniqId),
          },
        })
        .then((res) => (res.status === 200 ? handleLikePost(Number(uniqId)) : console.log('fail')))
    } catch (err) {
      console.log(err)
    } finally {
      console.log('filtering post done!')
    }
  }, [likePost, uniqId])

  // axios.delete 요청 성공시 실행할 로직
  const handleLikePost = (id: number) => {
    console.log('success')
    setLikePost(likePost.filter((v) => v !== id))
    setHeartState(false)
  }

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
                  <button type="button" onClick={() => filteringPost()}>
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
