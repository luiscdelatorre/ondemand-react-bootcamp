import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  grid-area: summary;
`

const Table = styled.div`
  border: 1px solid ${({theme}) => theme.borderColor};
  padding: 1rem;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Total = styled.p`
  font-size: 2.4rem;
`

const Column = styled.p`
  font-size: 1.6rem;
  min-width: 5rem;
  
  &:nth-child(2) {
    text-align: right;
  }
`

const LinkButton = styled(Link)`
  width: 100%;
  
  svg {
    margin-top: 0.25rem;
    margin-right: 0.5rem;
  }
`

const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 3rem;

  svg {
    margin-right: 0.5rem;
  }
`

export {
  Column,
  Container,
  LinkButton,
  PaymentButton,
  Row,
  Table,
  Total,
} 
