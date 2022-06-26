import styled from 'styled-components'
import { device } from 'config'

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100%;
  padding: 0 2rem 2rem;

  @media ${device.laptop} {  
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.desktop} {  
    grid-template-columns: repeat(4, 1fr);
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-area: grid;
  margin-bottom: 2rem;
  position: relative;

  @media ${device.laptop} {  
    margin-bottom: 6rem;
  }
`

const GridHeader = styled.div`
  padding: 2rem;
  text-align: right;

  p {
    font-family: ${({ theme }) => theme.fontTitle};
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.primary};
      font-size: 2rem;
    }
  }
`
const GridFooter = styled.div`
  padding: 2rem 0;
`

export {
  GridContainer,
  GridHeader,
  Grid,
  GridFooter
}
