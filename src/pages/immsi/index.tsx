import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { FETCHING_POSTS_REQUEST } from 'reducers/posts'

const Immsi = () => {
  const { posts } = useSelector((state: RootState) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    posts.length && console.log('posts:', posts)
  }, [posts])

  const loadUser = () => {
    console.log('start')
    dispatch({
      type: FETCHING_POSTS_REQUEST,
    })
  }

  return (
    <div>
      <h1>임시 페이지입니다!</h1>
      <button onClick={loadUser}>불러오기</button>
      {posts.length ? (
        posts.map((v) => (
          <div key={v.id} style={{ margin: '20px 0' }}>
            <p>{v.name}</p>
            <p>{v.userId}</p>
            <p>{v.qualification !== '' ? v.qualification : '없음'}</p>
            <p>{v.schedule !== '' ? v.schedule : '없음'}</p>
            <p>{v.summary !== '' ? v.summary : '없음'}</p>
            <p>{v.deadline !== '' ? v.deadline : '없음'}</p>
            <p>{v.size !== '' ? v.size : '없음'}</p>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Immsi
