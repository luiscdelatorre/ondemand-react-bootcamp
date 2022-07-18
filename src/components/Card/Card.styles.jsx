import { device } from 'config'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CardContainer = styled(Link)`
  border-radius: 2rem;
  color: ${({ theme }) => theme.text };
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.slideOverlay } 0px 5px 20px -10px;

    figure::before {
      opacity: 0.05;
    }

    img {
      transform: scale(1.05);
    }

    h3 {
      color: ${({ theme }) => theme.primary };
    }
  }
`
const CardImage = styled.figure`
  margin: 0;
  position: relative;
  
  &::before {
    background-color: ${({ theme }) => theme.slideOverlay };
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.2;
    position: absolute;
    right: 0;
    top: 0;
    transition: ${({ theme }) => theme.transition};
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
  }
`

const CardDescription = styled.div`
  background-color: #fff;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor };
  height: 100%;
  padding: 1rem;
  margin-top: -4rem;
  text-align: left;
  position: relative;
  z-index: 1;

  @media ${device.laptop} {
    padding: 2rem;
  }
`
const CardActions = styled.footer`
  text-align: center;
`

const CardName = styled.h3`
  font-size: 1.8rem;
  font-family: 'Dosis',sans-serif;
  font-weight: 700;
  height: 4rem;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  transition: ${({ theme }) => theme.transition};
`
const CardCategory = styled.p`
  font-size: 1.6rem;
`
const CardPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  span {
    color: ${({ theme }) => theme.primary };
  }
`

export {
  CardActions,
  CardCategory, 
  CardContainer,
  CardDescription,
  CardImage,
  CardName,
  CardPrice
} 
