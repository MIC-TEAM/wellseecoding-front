import Back from 'components/Common/Header/Back'
import Title from 'components/Common/Title'
import { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'reducers'
import { FETCHING_MYPAGE_REQUEST } from 'reducers/mypage'
import NeedUpdated from './need_update'
import axios from 'axios'
import Loading from 'components/Loading'

const SelfIntroductionUpdate = () => {
  /* ① 초기 initialState로 설정된 객체 myPages를 불러온다 */
  const { myPages } = useSelector((state: RootState) => state.mypage)

  const dispatch = useDispatch()

  /* 로컬 스토리지에서 토큰을 꺼낸뒤 실행하기 위한 블로킹 처리 */
  const [tokenState, setTokenState] = useState<boolean>(false)

  /* 
  ② 로컬에 저장된 토큰을 꺼내서 default header로 설정한다 
  왜냐하면 env.local 에 저장된 토큰이 없다고 가정하고 진행하기 때문에
  로컬스토리지에 저장한 엑세스 토큰을 꺼내서 초기 헤더 값으로 설정해주는 것이다
  */
  useEffect(() => {
    if (typeof window !== 'undefined') {
      /* 토큰 꺼내기 */
      axios.defaults.headers.common = {
        Authorization: `Bearer ` + localStorage.getItem('access_token'),
      }
      /* 정상처리 된다면 token 상태 true로 바꾸기 */
      setTokenState(true)
    }
  }, [])

  /* ③ myPages가 없고, tokenState이 준비가 되었다면 정보를 불러온다 */
  useEffect(() => {
    if (!myPages.length && tokenState) {
      /* ④ 액션 디스패치 */
      fetchInfo()
    }
  }, [tokenState])

  useEffect(() => {
    preventEnterEvent()
  }, [])

  /* ⑤ 이 액션을 통해 myPages 내부의 데이터가 들어온다 */
  const fetchInfo = useCallback(() => {
    dispatch({
      type: FETCHING_MYPAGE_REQUEST,
    })
  }, [dispatch])

  const preventEnterEvent = () => {
    if (process.browser) {
      const inputs = document.querySelectorAll('input')
      inputs.forEach((input) => {
        input.addEventListener('keydown', (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            return false
          }
        })
      })
    }
  }

  return (
    <>
      <Head>
        <title>자기소개 해주세요! </title>
        <meta name="description" content="회원가입 이후 정보 입력 페이지입니다." />
      </Head>
      <Back />

      <div>
        {/* 
        ⑦ myPages에 데이터가 존재할 경우, 이를 매핑하여 준다 
        intialState의 값을 바로 하위 컴포넌트 <NeedUpdated/>에 props로 전달한다
        map 한 데이터는 readOnly 값으로 현 단계에서 수정할 수 없기 때문이다
        */}
        {myPages.length ? (
          myPages.map((v, i) => (
            <div key={i}>
              <Title title="자기소개 해주세요!" className="loginMt" />
              <NeedUpdated key={i} PropAboutMe={v.aboutMe} PropJob={v.job} PropHashtag={v.tags} />
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
