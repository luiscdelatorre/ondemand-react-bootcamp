import styled from 'styled-components'
import { device } from 'config'
import { Link } from 'react-router-dom'

const MenuList = styled.ul`
  @media ${device.onlySm} {
    background-color: ${({ theme }) => theme.menu};
    height: 100%;
    padding-top: 2rem;
    width: 100%;
  }

  @media ${device.laptop} {
    display: flex;
    margin: 0 auto;
  }
`
const MenuListItem = styled.li`
  padding: 2rem;
  text-align: center;
  width: 100%;
  
  @media ${device.laptop} {
    display: flex;
    height: 3.8rem;
    padding: 1rem 2rem;
  }
`

const MenuLink = styled(Link)`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontTitle};
  font-size: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.link};
  }
`

export {
  MenuLink,
  MenuList,
  MenuListItem
}
