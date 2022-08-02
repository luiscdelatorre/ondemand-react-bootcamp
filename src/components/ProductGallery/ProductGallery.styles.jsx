import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-areas:
    'main-image'
    'thumbnails';
  margin-bottom: 2rem;
  
  @media ${device.tablet} {
    grid-template-areas:
      'thumbnails main-image';
  }
`
const Thumbnails = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  grid-area: thumbnails;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const MainImage = styled.figure`
  grid-area: main-image;
  margin: 0;
`

export {
  Container,
  MainImage,
  Thumbnails,
}
