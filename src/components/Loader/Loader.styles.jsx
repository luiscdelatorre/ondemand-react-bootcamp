import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
