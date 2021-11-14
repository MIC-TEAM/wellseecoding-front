import { useCallback, useEffect, useState } from 'react'
import { FETCHING_MYPAGE_REQUEST } from 'reducers/mypage'
import NeedUpdated from './need_update'
import { RootState } from 'reducers'
import Head from 'next/head'
import axios from 'axios'
import Loading from 'components/Loading'
import { useDispatch, useSelector } from 'react-redux'

const SelfIntroductionUpdate = () => {
  /* ① 초기 initialState로 설정된 객체 myPages를 불러온다 */
  const { myPages } = useSelector((state: RootState) => state.mypage)
  const dispatch = useDispatch()

  /* 로컬 스토리지에서 토큰을 꺼낸뒤 실행하기 위한 블로킹 처리 */
  const [tokenState, setTokenState] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      /* 토큰 꺼내기 */
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
      setTokenState(true)
    }
  }, [])

  const fetchInfo = useCallback(() => {
    dispatch({
      type: FETCHING_MYPAGE_REQUEST,
    })
  }, [dispatch])

  /* ③ myPages가 없고, tokenState이 준비가 되었다면 정보를 불러온다 */
  useEffect(() => {
    if (!myPages.length && tokenState) {
      /* ④ 액션 디스패치 */
      fetchInfo()
    }
  }, [tokenState])

  return (
    <>
      <Head>
        <title>학교 정보를 적어주세요 </title>
        <meta name="description" content="회원가입 이후 정보 입력 페이지입니다." />
      </Head>
      <div>
        {/* 
        ⑦ myPages에 데이터가 존재할 경우, 이를 매핑하여 준다 
        intialState의 값을 바로 하위 컴포넌트 <NeedUpdated/>에 props로 전달한다
        map 한 데이터는 readOnly 값으로 현 단계에서 수정할 수 없기 때문이다
        */}
        {myPages.length ? (
          myPages.map((v, i) => (
            <div key={i}>
              {v.educations.map((v, i) => (
                <div key={i}>
                  <NeedUpdated key={i} PropDegree={v.degree} PropMajor={v.major} PropGraduated={v.graduated} />
                </div>
              ))}
            </div>
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}

export default SelfIntroductionUpdate
