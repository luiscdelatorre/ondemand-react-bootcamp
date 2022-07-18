import styled from 'styled-components'
import { device } from 'config'

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  min-height: 100%;
  padding: 0 2rem 2rem;
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

const Subtitle = styled.h3`
  padding: 2rem 0;
  text-align: center;
`

export {
  GridContainer,
  GridHeader,
  Grid,
  GridFooter,
  Subtitle
}
