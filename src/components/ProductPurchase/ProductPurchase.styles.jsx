import styled from 'styled-components'
import { device } from 'config'

const Stock =  styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.danger };

  @media ${device.laptop} {
    font-size: 1.6rem;
  }

  ${({ hasStock, theme }) => hasStock && `
    color: ${theme.primary};
  `}
`

const Price =  styled.h3`
  color: ${({ theme }) => theme.text };
`

const FeaturesList =  styled.ul`
  p {
    display: flex;
    align-items: center;
  }
  svg { 
    font-size: 2rem;
    color: ${({ theme }) => theme.primary };
  }
  span {
    margin-left: 0.5rem;
  }
`

export {
  Stock,
  Price,
  FeaturesList,
}
