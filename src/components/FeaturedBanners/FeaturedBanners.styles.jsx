import { device } from 'config'
import styled from 'styled-components'

const Container = styled.div`
  height: 50vh;
  min-height: 300px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media ${device.laptop} {
    height: 80vh;
  }
`
export { Container }
