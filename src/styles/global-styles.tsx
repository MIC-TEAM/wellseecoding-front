import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import React from 'react'

export const textEllipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const hideScrollBar = css`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`

export const GlobalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      html {
        font-family: sans-serif;
        font-size: 16px;
        /* Prevent font scaling in landscape */
        -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
        -moz-text-size-adjust: none; /*Firefox*/
        -ms-text-size-adjust: none; /*Ie*/
        -o-text-size-adjust: none; /*old versions of Opera*/
      }
      body {
        letter-spacing: -0.025em;
        min-width: 375px;
        margin: 0 auto;
        height: 100vh;
        width: 100%;
        max-width: 1024px;
        min-height: 100%;
        box-sizing: border-box;
      }
      html,
      body,
      #__next {
        height: 100vh;
        width: 100%;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input,
      button {
        cursor: pointer;
        box-shadow: none;
        background: none;
        border: 0;
        color: inherit;
        line-height: normal;
        overflow: visible;
        padding: 0;
        -webkit-appearance: button; /* for input */
        &:focus,
        &:active {
          outline: none;
        }
      }
    `}
  />
)
