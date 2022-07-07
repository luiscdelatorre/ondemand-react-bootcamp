import styled from 'styled-components'
import { device } from 'config'

const MainHeader = styled.header`
  grid-area: header;
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header-left header-right';
  padding: 1rem;

  @media ${device.tablet} {  
    padding: 1rem 0;
  }

  @media ${device.laptop} {  
    padding: 2rem 0;
    grid-template-areas:
      'header-left header-center header-right';
  }
`
const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

const HeaderLeft = styled(HeaderItem)`
  grid-area: header-left;
`

const HeaderCenter = styled(HeaderItem)`
  grid-area: header-center;

  @media ${device.onlySm} {
    position: absolute;
    top: 60px;
    left: -100%;
    bottom: 0;
    z-index: 10;
    width: 100vw;
    transition: ${({ theme }) => theme.transition};

    ${({ open }) => open && `
      left: 0;
    `}
  }
`

const HeaderRight = styled(HeaderItem)`
  grid-area: header-right;
  justify-content: flex-end;
`

const MenuHamburger = styled.button`
  position: relative;
  background: none;
  height: 3.8rem;
  width: 3.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
  padding: 1.2rem;

  @media ${device.laptop} {
    display: none;
  }

  &:focus,
  &:hover {
    outline: none;
    box-shadow: none;
    background-color: ${({ theme }) => theme.borderColor};
  }

  &::before,
  &::after {
    content: '';
    background-color: ${({ theme }) => theme.text};
    display: block;
    height: 0.3rem;
    width: 2.5rem;
    transition: ${({ theme }) => theme.transtion};
  }  

  &::before{
    transform-origin: bottom center;
    ${({ open }) => open && `
      transform: rotate(45deg) translate(4px, 4px);
    `}
  }

  &::after{
    transform-origin: center;
    ${({ open }) => open && `
      transform: rotate(-45deg) translate(4px, -4px);
    `}
  }
`

export {
  HeaderContainer,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  MenuHamburger,
  MainHeader,
}
