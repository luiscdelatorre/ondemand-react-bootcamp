import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShoppingCartButton = styled(Link)`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  color: ${({ theme }) => theme.text};
  display: flex;
  font-size: 2.5rem;
  height: 38px;
  justify-content: center;
  margin-left: 1rem;
  padding: 0;
  position: relative;
  width: 38px;

  &:hover {
    background-color: ${({ theme }) => theme.borderColor };
  }
`

const Counter = styled.span`
  background-color: ${({ counter, theme }) => counter ? theme.primary : theme.text};
  border-radius: 50%;
  color: white;
  display: block;
  font-size: 1rem;
  height: 1.5rem;
  line-height: 1.5rem;
  position: absolute;
  right: 0.2rem;
  text-align: center;
  top: 0.2rem;
  width: 1.5rem;
  font-weight: 700;
`

export {
  ShoppingCartButton,
  Counter
}
