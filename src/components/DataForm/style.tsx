import styled from '@emotion/styled'

interface StyledDivProps {
  complete: boolean
}

export const MainContent = styled.div<StyledDivProps>`
  border: 1px solid black;
  margin: 20px 0;
  padding: 20px;

  background-color: ${(props) => props.complete === false && 'salmon'};

  & p {
    font-weight: bolder;
  }
`
