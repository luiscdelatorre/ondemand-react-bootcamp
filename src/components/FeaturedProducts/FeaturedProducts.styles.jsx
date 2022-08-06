import styled from 'styled-components'
import { device } from 'config'

const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 4rem 0 3rem;
  text-align: center;

  @media ${device.laptop} {  
    padding: 8rem 0 7rem;
  }  
`

const Title = styled.h2`
  margin: 0 0 4rem;

  @media ${device.laptop} {  
    margin-bottom: 8rem;
  }  
`

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 4rem;
  padding: 0 2rem;

  @media ${device.phoneMd} {  
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {  
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.laptop} {  
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.desktop} {  
    grid-template-columns: repeat(5, 1fr);
  }
`

export {
  Container,
  Title,
  Grid
}
