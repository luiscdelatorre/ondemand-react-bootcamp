import { device } from 'config'
import styled from 'styled-components'

const SlideContainer = styled.div`
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: opacity ease-in 1s;
  width: 100%;
  
  &::before {
    background-color: ${({ theme }) => theme.slideOverlay };
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 6s ease-out;
    width: 100%;
    z-index: 0;

    ${({ active }) => active && `
      transform: scale(1.05);
    `}
  }

  ${({ active }) => active && `
      opacity: 1;
  `}
`

const Title = styled.h2`
  color: ${({ theme }) => theme.textSecondary };
  font-size: 5.2rem;
  left: 2rem;
  max-width: 90%;
  position: absolute;
  top: 6rem;
  z-index: 2;

  @media ${device.laptop} {
    font-size: 9.6rem;
    max-width: 40%;
  }
`

const SlideAction = styled.button`
  bottom: 8rem;
  color: ${({ theme }) => theme.textSecondary };
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
`

export { 
  SlideContainer, 
  Title, 
  SlideAction
}
