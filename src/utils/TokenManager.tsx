import axios from 'axios'
import cookie from 'react-cookies'

function setToken(accessToken: string, refreshToken: string) {
  axios.defaults.headers.Authorization = 'Bearer ' + accessToken

  const expires = new Date()
  expires.setDate(Date.now() + 1000 * 60 * 60 * 24)

  cookie.save('accessToken', accessToken, {
    path: '/',
    expires,
    httpOnly: false,
  })
  cookie.save('refreshToken', refreshToken, {
    path: '/',
    expires,
    httpOnly: true,
  })
}

export { setToken }
