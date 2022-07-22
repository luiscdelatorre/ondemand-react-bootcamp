import styled from 'styled-components'
import {device } from 'config'

const Container = styled.figure`
  margin: 0 0 1rem;
  min-width: 10rem;
  max-height: 7.5rem;
  border: 1px solid ${({active, theme}) => active ? theme.primary : theme.borderColor};
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 7.5rem;
    object-fit: cover;
  }

  @media ${device.tablet} {  
    min-width: 12rem;
    max-height: 9rem;
    img {
      height: 9rem;
    }
  }

  @media ${device.laptop} {  
    min-width: 8rem;
    max-height: 6rem;
    img {
      height: 6rem;
    }
  }

  @media ${device.desktop} {  
    min-width: 10rem;
    max-height: 7.5rem;
    img {
      height: 7.5rem;
    }
  }

  @media ${device.desktopLg} {  
    min-width: 12rem;
    max-height: 9rem;
    img {
      height: 9rem;
    }
  }
`

export {Container}
