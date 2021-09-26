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
  tags: []
}

/* 내가 쓴 글 보낼 때 필요한 타입 */
export type WritePostType = {
  name: string
  deadline: string
  schedule: string
  summary: string
  qualification: string
  size: string
  tags: []
  id?: number
}

//----------------------------------------
// 회원가입 단계

/* 유저 로그인 정보 */
export type SignUpType = {
  username: string | ''
  password: string | ''
  email: string | ''
}

/* 학력표시 */
export type EducationsType = {
  degree: string | ''
  major: string | ''
  graduated: boolean
}

/* 자기소개 */
export type AboutMeType = {
  aboutMe: string | ''
}

/* 포트폴리오 링크 */
export type LinksType = {
  name: string | ''
  link: string | ''
  description: string | ''
}

/* 포트폴리오 링크 */
export type WorksType = {
  role: string | ''
  technology: string | ''
  years: number
}
