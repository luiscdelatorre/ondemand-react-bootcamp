import { device } from 'config'
import styled from 'styled-components'

const Container = styled.section`
  display: grid;
  grid-template-areas:
    'gallery'
    'info'
    'stock'
    'specs';
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    padding: 2rem 0;
    grid-template-areas:
      'gallery gallery'
      'info stock'
      'specs specs';
    grid-template-columns: 1fr 260px;
  }

  @media ${device.laptop} {  
    grid-template-areas:
      'gallery info stock'
      'specs specs specs';
    grid-template-columns: 400px 300px 260px;
  }

  @media ${device.desktop} {
    grid-template-columns: 500px 380px 260px;
  }

  @media ${device.desktopLg} {
    grid-template-columns: 600px 460px 260px;
  }
`

const GalleryContainer = styled.div`
  grid-area: gallery;
`

const InfoContainer = styled.div`
  grid-area: info;
  padding: 2rem;

  @media ${device.tablet} {  
    padding: 0 2rem;
  }
`

const PurchaseContainer = styled.div`
  grid-area: stock;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 3rem;
`

const SpecsContainer = styled.div`
  grid-area: specs;
  margin-top: 2rem;
`

export {
  Container,
  GalleryContainer,
  InfoContainer,
  PurchaseContainer,
  SpecsContainer
}
