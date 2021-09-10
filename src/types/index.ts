export type TodoType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

/* 서버로부터 받아오는 Posts 배열의 한 객체당 타입 */
export type PostType = {
  id: number
  userId: number
  name: string | ''
  deadline: string | ''
  schedule: string | ''
  summary: string | ''
  qualification: string | ''
  size: string | ''
}

/* 내가 쓴 글 보낼 때 필요한 타입 */
export type WritePostType = {
  name: string | ''
  deadline: string | ''
  schedule: string | ''
  summary: string | ''
  qualification: string | ''
  size: string | ''
}
