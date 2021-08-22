import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const CommentMain = styled.div`
  height: auto;

  & > div {
    padding: 20px;
  }
`

export const CommentMainWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  & h3 {
    margin-right: 4px;
  }
`

export const MainWrapHead = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: gray;
  margin-right: 6px;
`

export const MainWrapMain = styled.div`
  margin-bottom: 20px;
`

export const MainWrapBottom = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    border: 1px solid gray;
    padding: 5px;
    border-radius: 5px;
  }
`

export const commentFooter = css`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  z-index: 9999;

  & input {
    background: #f5f5f5;
    border: 1px solid #d3cfcc;
    width: 100%;
    height: 48px;
    margin-right: 8px;
    padding: 15px;
    border-radius: 10px;
  }
`
