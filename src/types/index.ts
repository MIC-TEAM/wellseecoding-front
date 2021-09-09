/*
result.data에 들어 있는 객체의 타입 
{
  completed: false,
  id: 1,
  title: "delectus aut autem",
  userId: 1
}
*/

export type TodoType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

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
