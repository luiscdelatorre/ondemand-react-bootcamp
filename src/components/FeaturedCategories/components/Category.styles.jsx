import { device } from 'config'
import styled from 'styled-components'

const Card = styled.div`
  max-width: 50%;
  &:last-child {
    max-width: 100%;
  }

  @media ${device.phoneLg} {
    max-width: 33%;
    &:nth-last-child(-n+2) {
      max-width: 50%;
    }
  }

  @media ${device.desktop} {
    max-width: 20%;
    &:nth-last-child(-n+2) {
      max-width: 20%;
    }
  }
`

const CardContent = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadiusSm};
  margin: 1rem;
  overflow: hidden;
  position: relative;

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
    transform: scale(1);
    transition: ${({ theme }) => theme.transition};
    width: 100%;
    z-index: 0;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`

const Title = styled.h3`
  bottom: 0.5rem;
  color: ${({ theme }) => theme.textSecondary };
  left: 1rem;
  margin: 0;
  position: absolute;
  z-index: 2;
`

export {
  Card,
  CardContent,
  Title
}
