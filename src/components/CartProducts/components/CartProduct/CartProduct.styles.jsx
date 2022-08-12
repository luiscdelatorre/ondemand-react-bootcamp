import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from 'config'

const CardContainer = styled.div`
  color: ${({ theme }) => theme.text };
  display: grid;
  overflow: hidden;
  text-decoration: none;
  grid-template-areas: 
    'image name name remove'
    'image stock stock stock'
    'image price subtotal subtotal'
    'image actions actions actions';
  grid-template-columns: 8rem auto auto auto;
  
  @media ${device.phoneMd} {
    grid-template-areas: 
      'image name name remove'
      'image stock stock stock'
      'image price price price'
      'image actions subtotal subtotal';
    grid-template-columns: 12rem 16rem 1fr auto;
  }

  @media ${device.phoneLg} {
    grid-template-columns: 12rem 20rem 1fr auto;
  }


  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor };
  }
`
const CardImage = styled.figure`
  flex-shrink: 0;
  grid-area: image;
  margin: 0;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    z-index: 0;
  }
`

const CardActions = styled.footer`
  align-items: center;
  display: flex;
  grid-area: actions; 
  justify-content: center;
  padding: 0 1rem 1rem;

  > div {
    margin: 0;
  }
`

const CardName = styled(Link)`
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  font-size: 1.8rem;
  font-weight: 700;
  grid-area: name;
  margin: 0;
  overflow: hidden;
  padding: 1rem 1rem 0;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const CardPrice = styled.p`
  align-items: center;
  display: flex;
  font-size: 1.8rem;
  grid-area: price;
  margin-bottom: 0;
  padding: 0 1rem 1rem;

  @media ${device.phoneMd} { 
    padding-bottom: 0;
  }
`

const CardSubtotal = styled.p`
  align-items: center;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  grid-area: subtotal;
  justify-content: flex-end;
  margin-bottom: 0;
  padding: 0 1rem 1rem;
  
  @media ${device.phoneLg} { 
    padding: 0 2rem 1rem;
    align-items: flex-end;
  }
`

const Stock = styled.p`
  color: ${({ theme }) => theme.danger};
  font-size: 1.3rem;
  font-weight: 700;
  grid-area: stock;
  line-height: 1;
  margin-bottom: 0;
  padding: 0 1rem;

  ${({ hasStock, theme }) => hasStock && `
    color: ${theme.primary};
  `}
`

const RemoveButton = styled.button`
  background-color: transparent;
  color: red;
  display: inline-block;
  grid-area: remove;
  height: 3rem;
  line-height: 1rem;
  margin-left: auto;
  margin-top: 0.5rem;
  padding: 0;
  width: 30px;

  &:hover {
    background-color: ${({ theme }) => theme.disabled};
  }

  @media ${device.phoneLg} {
    margin-right: 1rem;
  }
`

export {
  CardActions,
  CardContainer,
  CardImage,
  CardName,
  CardPrice,
  Stock,
  RemoveButton,
  CardSubtotal,
} 
