import styled from 'styled-components'

const DotsContainer = styled.div`
  bottom: 3rem;
  display: flex;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
`
const Dot = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.background};
  cursor: pointer;
  height: 20px;
  margin: 0 5px;
  width: 20px;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.primary};
    border-radius: 50%;
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: scale(0);
    transition: ${({ theme }) => theme.transition};
    z-index: 1;

    ${({ active }) => active && `
      transform: scale(1)
    `}
  }
`

export { 
  DotsContainer,
  Dot
}
