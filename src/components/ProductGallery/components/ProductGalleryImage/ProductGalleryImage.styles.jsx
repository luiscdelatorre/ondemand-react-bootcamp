import styled from 'styled-components'
import {device } from 'config'

const Container = styled.figure`
  border: 1px solid ${({active, theme}) => active ? theme.primary : theme.borderColor};
  cursor: pointer;
  flex-shrink: 0;
  margin: 0 0 1rem;
  max-height: 7.5rem;
  min-width: 10rem;
  overflow: hidden;

  img {
    height: 7.5rem;
    object-fit: cover;
    width: 100%;
  }

  @media ${device.tablet} {  
    max-height: 9rem;
    min-width: 12rem;
    img {
      height: 9rem;
    }
  }

  @media ${device.laptop} {  
    max-height: 6rem;
    min-width: 8rem;
    img {
      height: 6rem;
    }
  }

  @media ${device.desktop} {  
    max-height: 7.5rem;
    min-width: 10rem;
    img {
      height: 7.5rem;
    }
  }

  @media ${device.desktopLg} {  
    max-height: 9rem;
    min-width: 12rem;
    img {
      height: 9rem;
    }
  }
`

export {Container}
