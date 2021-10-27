import { css } from '@emotion/react'
import FlatBox from 'components/Common/FlatBox'
import BackOptional from 'components/Common/Header/BackOptional'
import PostFooter from 'components/Post/PostFooter'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { Common } from 'styles/common'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import IsModal from 'components/Common/IsModal'
import { FETCHING_POST_REQUEST, RESET_MEMBERS_STATE, RESET_POSTS_STATE } from 'reducers/posts'
import EditForm from 'components/EditForm'
import HashWrap from 'components/Common/HashWrap'
import Loading from 'components/Loading'
import { RESET_COMMENTS_LIST } from 'reducers/comments'
import Head from 'next/head'

function Post() {
  const router = useRouter()
  const { id } = router.query
  const { isModal, editMode } = useSelector((state: RootState) => state.common)
  const { post, updatePostSuccess, members } = useSelector((state: RootState) => state.posts)
  const { comments } = useSelector((state: RootState) => state.comments)

  const [localInfo, setLocalInfo] = useState<number | null>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    if (updatePostSuccess) dispatch({ type: RESET_POSTS_STATE })
  }, [updatePostSuccess, dispatch])

  useEffect(() => {
    if (members.length) {
      dispatch({ type: RESET_MEMBERS_STATE })
    }
  }, [members, dispatch])

  useEffect(() => {
    if (comments.length)
      dispatch({
        type: RESET_COMMENTS_LIST,
      })
  }, [comments, dispatch])

  useEffect(() => {
    saveLocalInfo()
  }, [])

  useEffect(() => {
    !post.length && id && loadPost(id)
  }, [post, id])

  const saveLocalInfo = () => {
    const result = Number(localStorage.getItem('id'))
    setLocalInfo(result)
  }

  const loadPost = useCallback(
    (id) => {
      dispatch({
        type: FETCHING_POST_REQUEST,
        data: id,
      })
    },
    [dispatch]
  )
  return (
    <>
      <Head>
        <title>게시글 | wellseecoding</title>
        <meta name="description" content="게시글을 동적으로 불러오는 페이지입니다." />
      </Head>
      {post?.length ? (
        post.map((d) => (
          <BackOptional key={d.id} title="" optional={true} localId={localInfo} userId={d.userId} uniqId={id} />
        ))
      ) : (
        <div></div>
      )}

      <main css={togetherBoard}>
        <div className="wrap">
          {post.length ? (
            post.map((d) => (
              <div key={d.id}>
                <h1>{d.name}</h1>
                <div className="myInfo">
                  <div></div>
                  <div>
                    {/* user에 대한 정보가 들어가야 함 */}
                    <h3>{d.userId && '칼국수'}</h3>
                    <p>{d.userId}</p>
                  </div>
                </div>

                <div className="mainContents">
                  <div css={flatBox}>
                    <select>
                      <option value="모집중">모집중</option>
                      <option value="모집중">기간종료</option>
                    </select>
                  </div>

                  <FlatBox name="작업기간" contents={d.schedule} />
                  <FlatBox name="일정/위치" contents={d.schedule} />
                  <FlatBox name="자격요건" contents={d.qualification} />
                  <FlatBox name="스터디 설명" contents={d.summary} />
                  <FlatBox name="모집인원" contents={d.size} />
                  <div className="flatBox">
                    <h3>해시태그</h3>
                    {d.tags.map((h, i) => (
                      <HashWrap key={i} content={h}></HashWrap>
                    ))}
                  </div>
                </div>
                {editMode && (
                  <EditForm
                    id={d.id}
                    userId={d.userId}
                    name={d.name}
                    deadline={d.deadline}
                    schedule={d.schedule}
                    summary={d.summary}
                    qualification={d.qualification}
                    size={d.size}
                    tags={d.tags}
                    commentCount={d.commentCount}
                  />
                )}
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </main>
      {/* localStorage에 저장된 id와 게시글의 id가 같을 경우에 가입현황 / 가입하기 버튼 보여주기  */}
      {post.map((d) => (
        <PostFooter key={d.id} localId={localInfo} userId={d.userId} uniqId={id} commentCount={d.commentCount} />
      ))}

      {isModal.open && <IsModal />}
    </>
  )
}

const flatBox = css`
  background-color: #fff8f5;
`
// 게시글
const togetherBoard = css`
  width: 100%;
  background-color: #fff8f5;

  .mainContents {
    padding-bottom: 20px;
    background-color: #fff8f5;
  }

  h1 {
    padding: 9px 21px;
    line-height: 28px;
    font-weight: 500;
    font-size: 2rem;
    background: #fff;
  }

  .myInfo {
    padding: 9px 21px;
    display: flex;
    align-items: center;
    background: #fff;
    div:first-of-type {
      margin-right: 13px;
      background-color: ${Common.colors.gray03};
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    h3 {
      font-size: 1.6rem;
      font-weight: 500;
      margin-bottom: 4px;
    }

    p {
      font-size: 1.4rem;
      font-weight: 400;
      color: ${Common.colors.gray03};
    }
  }
  select {
    margin: 18px 20px;
    padding: 8px 10px;
    border: none;
    font-size: ${Common.fontSize.fs18};
    letter-spacing: -0.4px;
    background: #fff;
  }

  .flatBox {
    background-color: white;
    padding: 21px 22px;
    margin-bottom: 9px;

    h3 {
      font-family: 'Spoqa Han Sans Neo';
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
      letter-spacing: -0.6000000238418579px;
      text-align: justify;
      margin-bottom: 14px;
    }

    p {
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
`

export default Post
