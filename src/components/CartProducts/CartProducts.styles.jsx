import styled from 'styled-components'
import { device } from 'config'

const Grid = styled.div`
  border: 1px solid ${({ theme }) => theme.borderColor };
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr;
  min-height: 100%;
  overflow: hidden;
  padding: 0 1rem 2rem;
  text-align: left;

  @media ${device.phoneLg} {  
    padding: 0;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-area: grid;
  margin-bottom: 2rem;
  position: relative;
  grid-template-areas: 
    'header'
    'content'
    'footer';

  @media ${device.tablet} {  
    grid-template-areas: 
      'header header'
      'content footer';
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 24rem;
  }

  @media ${device.laptop} {  
    grid-template-columns: 1fr 32rem;
    margin-bottom: 6rem;
  }
`

const GridHeader = styled.div`
  grid-area: header;
  padding: 2rem;
  text-align: center;
`

const GridFooter = styled.div`
  grid-area: footer;

  @media ${device.phone} {
    border-top: 1px solid ${({ theme }) => theme.borderColor };
    margin-top: 2rem;
    padding-top: 2rem;
  }
`

const Subtitle = styled.h3`
  margin: 0 0 2rem;
  text-align: center;
`

export {
  GridContainer,
  GridHeader,
  Grid,
  GridFooter,
  Subtitle,
}
