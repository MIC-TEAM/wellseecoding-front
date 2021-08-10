import { css } from '@emotion/react'
import { Common } from '../../../styles/common'

export const container = css`
  width: 100%;
  height: 52px;
  display: block;
  font-size: ${Common.fontSize.fs18};
  border-radius: 16px;
  padding: 16px 0;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  background: ${Common.colors.gray04};

  &:disabled {
    background: ${Common.colors.gray04};
    cursor: default;
  }

  &.activation {
    background: #ff6e35;
  }

  &.skip {
    background: #ffffff;
    border: 1px solid #ff6e35;
    color: ${Common.colors.black};
  }
`
