import styled from 'styled-components'
import { device } from 'config'

const Title = styled.h2`
  font-size: 2.4rem;

  @media ${device.laptop} {
    font-size: 3rem;
  }
`

const Price = styled.p`
  color: ${({theme}) => theme.primary };
  font-size: 2rem;
  font-weight: bold;
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
    font-weight: bold;
    width: 30%;
  }

  dd {
    width: 70%;
  }
`

const Tag = styled.span`
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: inline-block;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
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
  Description,
  DescriptionList,
  Price,
  Sku,
  Subtitle,
  Tag,
  Title,
}
