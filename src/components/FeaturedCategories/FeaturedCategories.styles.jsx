import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 4rem 0 3rem;
  text-align: center;

  @media ${device.laptop} {  
    padding: 8rem 0 7rem;
  }  
`

const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
`

const Title = styled.h2`
  margin: 0 0 3rem;

  @media ${device.laptop} {
    margin-bottom: 7rem;
  }
`

export {
  Container,
  CategoriesWrapper,
  Title
}
