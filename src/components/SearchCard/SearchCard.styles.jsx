import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from 'config'

const CardContainer = styled(Link)`
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.borderColor };
  color: ${({ theme }) => theme.text };
  display: grid;
  overflow: hidden;
  text-decoration: none;

  @media ${device.phone} {
    grid-template-areas: 
      'image image'
      'name name'
      'price category'
      'description description'
      'actions actions';
    grid-template-columns: auto 1fr;
  }

  @media ${device.phoneLg} {
    grid-template-areas: 
      'image name name'
      'image price category'
      'image description description'
      'image actions actions';
    grid-template-columns: 16rem auto 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 18rem auto 1fr;
  }

  @media ${device.laptop} {
    grid-template-areas: 
      'image name actions'
      'image price actions'
      'image category actions'
      'image description actions';
    grid-template-columns: 12rem 1fr auto;
    grid-template-rows: auto auto auto 1fr;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.slideOverlay } 0px 5px 20px -10px;

    figure::before {
      opacity: 0.05;
    }

    h3 {
      color: ${({ theme }) => theme.primary };
    }
  }
`
const CardImage = styled.figure`
  grid-area: image;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  width: 100%;

  @media ${device.phone} {
    max-height: 32rem;
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: ${({ theme }) => theme.transition};
  }
`

const CardDescription = styled.p`
  grid-area: description;
  margin-bottom: 0;
  padding: 1rem 1rem 0;

  @media ${device.laptop} {
    padding: 0 1rem 1rem;
  }  
`
const CardActions = styled.footer`
  grid-area: actions; 
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem 2rem;

  @media ${device.phoneLg} {
    padding: 1rem;
  }

  button {
    width: 100%;
  }
`

const CardName = styled.h3`
  grid-area: name;
  font-size: 1.8rem;
  font-family: 'Dosis',sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  transition: ${({ theme }) => theme.transition};
  margin: 0;
  padding: 1rem;
`
const CardCategory = styled.p`
  grid-area: category;
  font-size: 1.4rem;
  margin-bottom: 0;
  padding: 0 1rem;
  text-align: right;

  @media ${device.laptop} {
    text-align: left;
    padding: 0 1rem 1rem;
  }
`

const CardPrice = styled.p`
  grid-area: price;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0;
  padding: 0 1rem;

  @media ${device.laptop} {
    padding: 0 1rem 1rem;
  }
`

export {
  CardActions,
  CardContainer,
  CardImage,
  CardDescription,
  CardName,
  CardCategory, 
  CardPrice
} 
