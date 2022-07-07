import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Dots = styled.div`
  animation: animloader 1s linear infinite alternate;
  border-radius: 50%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.primary};
  display: block;
  height: 12px;
  margin:15px auto;
  position: relative;
  width: 12px;
`

export { 
  Container,
  Dots,
} 
