import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import React from 'react'
import { Common } from './common'

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
        font-size: 10px;
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
        max-width: 600px;
        min-height: 100%;
        box-sizing: border-box;
        background: #fff;
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
        -webkit-appearance: none; /* for input */
        &:focus,
        &:active {
          outline: none;
        }
      }
      ol,
      ul,
      li {
        list-style: none;
      }
      // common input material UI
      .MuiFormControl-root {
        width: 100%;
        margin-bottom: 22px !important;
        label {
          font-size: ${Common.fontSize.fs20};
          color: ${Common.colors.gray04};
        }
        label[data-shrink='true'] {
          font-size: ${Common.fontSize.fs14};
          color: #ff6e35;
        }
        input {
          font-size: ${Common.fontSize.fs20};
        }
        .MuiInput-underline {
          &::before {
            border-bottom: 1px solid ${Common.colors.gray04};
          }
          &::after {
            border-bottom: 1.6px solid #ff6e35;
          }
          &:hover:not(.Mui-disabled)::before {
            border-bottom: 1.6px solid #ff6e35;
          }
        }
        .MuiSvgIcon-root {
          font-size: 2.2rem;
        }
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .MuiTypography-body1 {
        font-size: 2rem !important;
      }
      .MuiSvgIcon-root {
        fill: #ff6e35 !important;
        font-size: 2rem !important;
      }
    `}
  />
)
