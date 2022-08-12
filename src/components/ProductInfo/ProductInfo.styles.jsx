import styled from 'styled-components'
import { device } from 'config'

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

const Price = styled.p`
  color: ${({theme}) => theme.primary };
  font-size: 2rem;
  margin-bottom: 0;

  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`

const Sku = styled.p`
  font-size: 1.4rem;
`

const DescriptionList = styled.dl`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.4rem;

  dt, dd {
    align-items: center;
    display: flex;
    margin: 0.5rem 0;
  }

  dt {
    font-weight: 700;
    width: 30%;
  }

  dd {
    width: 70%;
  }
`

const Tag = styled.span`
  border-radius: ${({ theme }) => theme.borderRadiusMd};
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: inline-block;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
`

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  font-weight: 700;

  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  font-size: 1.4rem;


`

export {
  Description,
  DescriptionList,
  Price,
  Sku,
  Subtitle,
  Tag,
  Title,
}
