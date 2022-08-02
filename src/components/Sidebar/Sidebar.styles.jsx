import { device } from 'config'
import styled from 'styled-components'

const Aside = styled.aside`
  border: 1px solid ${(props) => props.theme.borderColor };
  grid-area: sidebar;
  padding: 0 2rem 2rem;
  width: 100%;

  @media ${device.tablet} {
    border-bottom: none;
    border-left: none;
    border-top: none;
    padding: 2rem 0;
  }
`

const Title = styled.h2`
  font-size: 2.4rem;
  margin: 2rem auto;
  text-align: center;
  
  @media ${device.tablet} {
    text-align: left;
  }
`
const FilterTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  
  @media ${device.tablet} {
    text-align: left;
  }
`
const FilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export {
  Aside,
  Title,
  FilterTitle,
  FilterList
}
