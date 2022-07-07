import styled from 'styled-components'
import { device } from 'config'

const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 60px 1fr auto;
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    'header'
    'content'
    'footer';
  @media ${device.laptop} {  
    grid-template-rows: 80px 1fr auto;
  }
`

const MainContentStyled = styled.main`
  grid-area: content;
  margin: 0 auto;
  width: 100%;
`

export {
  ContainerStyled,
  MainContentStyled
}
