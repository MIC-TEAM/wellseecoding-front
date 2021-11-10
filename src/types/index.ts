export type homeData = {
  createdGroups: PostType[]
  registeredGroups: PostType[]
  appliedGroups: PostType[]
  likedGroups: PostType[]
}

export type TodoType = {
  completed: boolean
  id: number
  title: string
  userId: number
}

export type MemberData = {
  userId: number
  postId: number
  name: string
  authorized: boolean
}

export type PostData = {
  theme: string
  posts: PostType[]
}

/* 서버로부터 받아오는 알림 배열에 대한 타입 정의 */

export type notificationType = {
  id: number
  senderUserId: number
  senderUserName: string
  receiverUserId: number
  receiverUserName: string
  postId: number
  postTitle: string
  eventCategory: string
  timestamp: number
  read: boolean
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
  commentCount: number
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

export type CommentType = {
  id: number
  name: string
  job: string
  text: string
  me: boolean
  date: string
}

export type FetchCommentsType = {
  userId: number
  userName: string
  commentId: number
  commentDate: number
  text: string
  deleted: boolean
  children: FetchCommentsType[]
}

export type WriteCommentType = {
  id: number
  parentId: number
  text: string
}

export type UpdateCommentType = {
  postId: number
  commentId: number
  text: string
}

//----------------------------------------
// 마이페이지
export type myPage = {
  status: string
  aboutMe: string
  job: string
  tags: string[]
  educations: myPageEducations[]
  works: myPageWorks[]
  links: myPageLinks[]
}

// 학교 업데이트
export type myPageEducations = {
  major: string
  degree: string
  graduated: boolean
}

// 경력 업데이트
export type myPageWorks = {
  role: string
  technology: string
  years: number
}

// 포트폴리오 업데이트
export type myPageLinks = {
  name: string
  link: string
  description: string
}

// 자기소개 업데이트
export type myPageSelfIntro = {
  aboutMe: string
  tags: string[]
  job: string
}
