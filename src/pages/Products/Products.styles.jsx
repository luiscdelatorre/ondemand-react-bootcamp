import { device } from 'config'
import styled from 'styled-components'

const Container = styled.section`
  background-color: ${({theme}) => theme.background};
  display: grid;
  height: 100%;
  grid-template-areas:
    'page-header'
    'sidebar'
    'grid';
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;

  @media ${device.tablet} {  
    grid-template-areas:
      'sidebar page-header'
      'sidebar grid';
    grid-template-columns: 180px 1fr;
    grid-template-rows: auto 1fr;
  }

  @media ${device.desktopLg} {  
    grid-template-columns: 240px 1fr;
  }
`

const PageHeader = styled.div`
  grid-area: page-header;
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
