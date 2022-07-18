import { device } from 'config'
import styled from 'styled-components'

const Container = styled.section`
  background-color: ${({theme}) => theme.background};
`

const PageHeader = styled.div`
  text-align: center;
`
const Title = styled.h2`
  margin: 4rem 0;

  @media ${device.tablet} {  
    margin-bottom: 0;
  }  
`

export {
  Container,
  Title,
  PageHeader,
} 
