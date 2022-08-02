import styled from 'styled-components'
import { device } from 'config'

const ContainerStyled = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 60px 1fr auto;
  min-height: 100%;
  position: relative;
  width: 100%;

  @media ${device.laptop} {  
    grid-template-rows: 80px 1fr auto;
  }
`

const MainContentStyled = styled.main`
  grid-area: content;
  margin: 0 auto;
  width: 100%;
  z-index: 0;
`

export {
  ContainerStyled,
  MainContentStyled
}
