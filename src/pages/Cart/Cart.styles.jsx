import { device } from 'config'
import styled from 'styled-components'

const Container = styled.section`
  background-color: ${({theme}) => theme.background};
  text-align: center;
`

const Title = styled.h2`
  margin: 4rem 1rem;

  @media ${device.phoneLg} {  
    margin: 4rem 0;
  }  
`

export {
  Container,
  Title,
}
