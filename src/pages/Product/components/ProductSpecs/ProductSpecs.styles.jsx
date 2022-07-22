import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  border-radius: 2rem;
  box-shadow: ${({ theme }) => theme.slideOverlay } 0px 5px 20px -10px;
  padding: 2rem;
  margin: 4rem auto;
`

const SpecsTable = styled.div`
  font-size: 1.4rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
`

const SpecsTableRow = styled.div`
  font-size: 1.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: grid;
  grid-template-areas: 'name description';
  grid-template-columns: 12rem 1fr;
  
  @media ${device.tablet} {
    grid-template-columns: 14rem 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 16rem 1fr;
  }
  @media ${device.desktop} {
    grid-template-columns: 20rem 1fr;
  }
  @media ${device.desktopLg} {
    grid-template-columns: 26rem 1fr;
  }
`

const Subtitle = styled.h2`
  font-size: 1.6rem;
  display: inline-block;
  margin: 0;
  padding: 1rem 2rem 0;

  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`

const Name = styled.p`
  margin: 0;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  grid-area: name;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`
const Description = styled.p`
  margin: 0;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  grid-area: description;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

export {
  Container,
  SpecsTable,
  SpecsTableRow,
  Subtitle,
  Name,
  Description
}
