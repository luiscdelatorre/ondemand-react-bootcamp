import { MenuLink, MenuList, MenuListItem } from './MainMenu.styles'
import PropTypes from 'prop-types'

const MainMenu = ({ toggleMenu }) => {
  return (
    <MenuList>
      <MenuListItem>
        <MenuLink onClick={toggleMenu} to="/home">Home</MenuLink>
      </MenuListItem>
      <MenuListItem>
        <MenuLink onClick={toggleMenu} to="/products">Products</MenuLink>
      </MenuListItem>
    </MenuList>
  )
}
 
MainMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}

export default MainMenu
