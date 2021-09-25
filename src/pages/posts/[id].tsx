import { css } from '@emotion/react'
import FlatBox from 'components/Common/FlatBox'
// import HashWrap from 'components/Common/HashWrap'
import BackOptional from 'components/Common/Header/BackOptional'
import PostFooter from 'components/Post/PostFooter'
import { useRouter } from 'next/router'
import React, { useCallback, useState } from 'react'
import { Common } from 'styles/common'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import IsModal from 'components/Common/IsModal'
import { FETCHING_POST_REQUEST } from 'reducers/posts'
import EditForm from 'components/EditForm'
import HashWrap from 'components/Common/HashWrap'
import Loading from 'components/Loading'

function Post() {
  const router = useRouter()
  const { id } = router.query
  const { isModal, editMode } = useSelector((state: RootState) => state.common)
  const { post } = useSelector((state: RootState) => state.posts)

  const [localInfo, setLocalInfo] = useState<number | null>(null)

  const dispatch = useDispatch()

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

  // url로 접근했을 때 데이터를 패칭하지 않은 상태에서 렌더링하여 오류가 생김
  // 동기적으로 끊어줬다가 success 시에 해당 정보를 렌더링하도록 설정해야 할 듯

  return (
    <>
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
                    <h3>{d.name && '이준희'}</h3>
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
                  />
                )}
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </main>
      <PostFooter />
      {isModal.open && <IsModal />}
    </>
  )
}

const flatBox = css`
  background-color: #fff8f5;
`

const togetherBoard = css`
  width: 100%;
  height: 100vh;
  background-color: #fff8f5;
  .mainContents {
    background-color: #fff8f5;
  }
  .wrap {
    padding-bottom: 100px;
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
