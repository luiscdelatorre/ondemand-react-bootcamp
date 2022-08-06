import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
  grid-area: summary;
`

const SummaryTable = styled.div`
  border: 1px solid ${({theme}) => theme.borderColor};
  padding: 1rem;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const SummaryTotal = styled.p`
  font-size: 2.4rem;
`

const SummaryColumn = styled.p`
  font-size: 1.6rem;
  min-width: 5rem;
  
  &:nth-child(2) {
    text-align: right;
  }
`

const LinkButton = styled(Link)`
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 3rem;
  border: none;
  color: ${({ theme }) => theme.textSecondary};
  display: flex;
  font-family: 'Dosis', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  justify-content: center;
  margin: 1rem 0 0.5rem;
  padding: 1.5rem 3rem;
  text-decoration: none;
  width: 100%;

  svg {
    margin-right: 0.5rem;
  }
`

export {
  Container,
  SummaryTable,
  SummaryRow,
  SummaryTotal,
  LinkButton,
  SummaryColumn
} 
