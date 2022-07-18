import styled from 'styled-components'
import { device } from 'config'

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const QtyButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 50%;
`

const AddToCart = styled.button`
  margin: 2rem auto;
  width: 100%;
`

const Stock =  styled.h3`
  font-size: 1.4rem;
  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

const Price =  styled.h3`
  color: ${({ theme }) => theme.primary };
`
const QtyInput =  styled.input`
  width: 100px;
  margin: 0 1rem;
`

export {
  ButtonsContainer,
  QtyButton,
  AddToCart,
  Stock,
  Price,
  QtyInput
}
