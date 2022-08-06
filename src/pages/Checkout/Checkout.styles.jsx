import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  display: grid;
  grid-area: grid;
  margin-bottom: 2rem;
  position: relative;
  grid-template-areas: 
    'header'
    'form'
    'summary';


  @media ${device.tablet} {  
    grid-template-areas: 
      'header header'
      'form summary';
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 24rem;
  }

  @media ${device.laptop} {  
    margin-bottom: 6rem;
    grid-template-columns: 1fr 32rem;
  }
`

const PageHeader = styled.div`
  grid-area: header;
  text-align: center;
`

const Title = styled.h2`
  margin: 4rem 1rem;

  @media ${device.phoneLg} {  
    margin: 4rem 0;
  }  
`
export {
  Container,
  PageHeader,
  Title
}
