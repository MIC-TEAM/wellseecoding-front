import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { UPDATE_COMMENT_REQUEST } from 'reducers/comments'
import { CLOSE_EDITMODE } from 'reducers/common'

export type Props = {
  value: string
  postId: string | string[] | undefined
  commentId: number
}

function EditComment({ value, commentId, postId }: Props) {
  const [text, setText] = useState(value)
  const dispatch = useDispatch()
  const { updateCommentSuccess } = useSelector((state: RootState) => state.comments)
  const router = useRouter()

  useEffect(() => {
    if (updateCommentSuccess) router.reload()
  }, [updateCommentSuccess, router])

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
      }
    },
    [dispatch, commentId, postId, text]
  )

  return (
    <form onSubmit={editComment}>
      <textarea
        style={{ width: '100%', height: '2em', border: 'none', resize: 'none' }}
        value={text}
        onChange={onChangeText}
      />
      <div style={{ textAlign: 'end', fontSize: '14px' }}>
        <button onClick={() => dispatch({ type: CLOSE_EDITMODE })}>
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
