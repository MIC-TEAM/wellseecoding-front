import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_COMMENT_REQUEST } from 'reducers/comments'
import { SET_EDITMODE } from 'reducers/common'

export type Props = {
  value: string
  postId: string | string[] | undefined
  commentId: number
}

function EditComment({ value, commentId, postId }: Props) {
  const [text, setText] = useState(value)
  const dispatch = useDispatch()

  const router = useRouter()

  const onChangeText = useCallback((e) => {
    setText(e.target.value)
  }, [])

  const editComment = useCallback(
    (e) => {
      e.preventDefault()
      try {
        dispatch({
          type: UPDATE_COMMENT_REQUEST,
          data: {
            postId: Number(postId),
            commentId: commentId,
            text: text,
          },
        })
      } catch (err) {
        console.error(err)
      } finally {
        alert('수정되었습니다')
        router.reload()
      }
    },
    [dispatch, commentId, postId, text, router]
  )

  return (
    <form onSubmit={editComment}>
      <textarea
        style={{ width: '100%', height: '2em', border: 'none', resize: 'none' }}
        value={text}
        onChange={onChangeText}
      />
      <div style={{ textAlign: 'end', fontSize: '14px' }}>
        <button onClick={() => dispatch({ type: SET_EDITMODE })}>
          <span style={{ marginRight: 10 }}>취소</span>
        </button>
        <button type="submit">
          <span>수정</span>
        </button>
      </div>
    </form>
  )
}

export default EditComment
