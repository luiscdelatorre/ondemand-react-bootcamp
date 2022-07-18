import {
  Branding,
  Searchbar,
  ShoppingCart,
  MainMenu
} from 'components'
import { useState } from 'react'
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
  MenuHamburger,
  MainHeader
} from './Header.styles'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <MainHeader>
      <HeaderContainer className='container'>
        <HeaderLeft>
          <MenuHamburger open={showMenu} onClick={toggleMenu}/>
          <Branding />
        </HeaderLeft>
        <HeaderCenter open={showMenu}>
          <MainMenu toggleMenu={toggleMenu}/>
        </HeaderCenter>
        <HeaderRight>
          <Searchbar />
          <ShoppingCart />
        </HeaderRight>
      </HeaderContainer>
    </MainHeader>
  )
}
 
export default Header
