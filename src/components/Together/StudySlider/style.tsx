import { css } from '@emotion/react'

export const studyContentListWrap = css`
  display: flex;
  position: relative;
`

export const studyContentList = css`
  overflow: hidden;
  overflow-x: scroll;
  width: 100%;
  margin-right: 0;
  flex-wrap: nowrap;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`
