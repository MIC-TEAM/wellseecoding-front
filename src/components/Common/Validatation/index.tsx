import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

const ValidationError: React.FC<Props> = ({ children }) => {
  return <ErrorNotice>{children}</ErrorNotice>
}

export default ValidationError

const ErrorNotice = styled.span`
  color: rgb(248, 47, 98);
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  margin: 16px 0 0;
`
