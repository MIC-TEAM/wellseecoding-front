import axios from 'axios'
import React from 'react'

const Immsi = () => {
  const myToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLndlbGxzZWVjb2RpbmcuY29tIiwic3ViIjoiMTkiLCJleHAiOjE2MzM2MTIwODB9.ShFlmnPmU5Lq30dpTCqzoD9Cqtgueiuy2KfKAsVDXQ8'

  const myConfig = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  }

  const loadUser = async () => {
    try {
      await axios
        .get('https://api.wellseecoding.com/api/v1/users/profile', myConfig)
        .then((res) => console.log('result :', res.data))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>임시 페이지입니다!</h1>
      <button onClick={loadUser}>불러오기</button>
      <p></p>
    </div>
  )
}

export default Immsi
