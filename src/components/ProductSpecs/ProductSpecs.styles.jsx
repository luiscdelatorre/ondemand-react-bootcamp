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
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  display: grid;
  font-size: 1.4rem;
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
  display: inline-block;
  font-size: 1.6rem;
  margin: 0;
  padding: 1rem 2rem 0;

  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`

const Name = styled.p`
  border-right: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 1.4rem;
  font-weight: bold;
  grid-area: name;
  margin: 0;
  padding: 1rem 2rem;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`
const Description = styled.p`
  font-size: 1.4rem;
  grid-area: description;
  margin: 0;
  padding: 1rem 2rem;

  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

export {
  Container,
  Description,
  Name,
  SpecsTable,
  SpecsTableRow,
  Subtitle,
}
