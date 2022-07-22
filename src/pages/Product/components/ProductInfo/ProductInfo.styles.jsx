import styled from 'styled-components'
import { device } from 'config'

const Title = styled.h1`
  font-size: 2.4rem;
  @media ${device.laptop} {
    font-size: 3rem;
  }
`

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: ${({theme}) => theme.primary };
  margin-bottom: 0;
  @media ${device.laptop} {
    font-size: 2.4rem;
  }
`

const Sku = styled.p`
  font-size: 1.4rem;
`

const DescriptionList = styled.dl`
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  dt, dd {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  dt {
    font-weight: bold;
    width: 30%;
  }

  dd {
    width: 70%;
  }
`

const Tag = styled.span`
  font-size: 1.4rem;
  border-radius: 3rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: inline-block;
  margin-right: 0.5rem;
`

const Subtitle = styled.h2`
  font-size: 1.6rem;
  @media ${device.laptop} {
    font-size: 1.8rem;
  }
`

const Description = styled.p`
  font-size: 1.4rem;
  @media ${device.laptop} {
    font-size: 1.6rem;
  }
`

export {
  Title,
  Price,
  Sku,
  DescriptionList,
  Tag,
  Description,
  Subtitle 
}
