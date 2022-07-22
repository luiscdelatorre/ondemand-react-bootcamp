import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  margin-bottom: 2rem;
  display: grid;
  grid-template-areas:
    'main-image'
    'thumbnails';
  grid-gap: 2rem;

  @media ${device.tablet} {
    grid-template-areas:
      'thumbnails main-image';
  }
`
const Thumbnails = styled.div`
  grid-area: thumbnails;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
  Thumbnails,
  MainImage
}
