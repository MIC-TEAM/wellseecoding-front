import { GET_POSTS_URL } from 'apis'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PostType } from 'types'

const Immsi = () => {
  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    posts.length && console.log(posts)
  }, [posts])

  const myToken = process.env.NEXT_PUBLIC_TOKEN

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  }

  const loadUser = async () => {
    try {
      await axios.get(GET_POSTS_URL, myConfig).then((res) => setPosts(res.data))
    } catch (err) {
      console.log(err)
    }
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
