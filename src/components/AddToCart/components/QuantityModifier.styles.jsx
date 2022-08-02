import styled from 'styled-components'

const ButtonsContainer = styled.div`
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2rem auto;
  position: relative;
  width: 100%;
`

const QtyButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 3rem;
  color: ${({ theme }) => theme.primary};
  display: flex;
  flex-basis: auto;
  flex-grow: 0; 
  flex-shrink: 1;
  padding: 1rem 1.5rem;
  position: relative;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.primary};
  }
`

const QtyInput =  styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  min-width: 0;
  padding: 1.65rem 0;
  text-align: center;
  z-index: 0;

  &:focus {
    outline: none;
  }
`
const QtyLabel =  styled.span`
  background-color: ${({ theme }) => theme.background};
  bottom: -0.6rem;
  bottom: 0;
  color: black;
  font-size: 1.2rem;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  width: 8.5rem;
  z-index: 1;
`

export { 
  ButtonsContainer,
  QtyButton,
  QtyInput,
  QtyLabel
} 
