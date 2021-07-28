import axios, { AxiosInstance, AxiosResponse } from 'axios'

export const apiClient: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 1000,
})

apiClient.defaults.headers.post['Content-Type'] = 'application/json'
apiClient.defaults.withCredentials = true

const responseFulfilled = (response: AxiosResponse<any>) => {
  // 응답 데이터 가공
  return response
}

const responseRejected = (error: any) => {
  // 오류 응답 처리
  return Promise.reject(error)
}

apiClient.interceptors.response.use(responseFulfilled, responseRejected)
