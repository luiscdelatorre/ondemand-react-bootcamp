import { MenuList, MenuListItem } from './MainMenu.styles'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MainMenu = ({ toggleMenu }) => {
  return (
    <MenuList>
      <MenuListItem>
        <Link onClick={toggleMenu} to="/home">Home</Link>
      </MenuListItem>
      <MenuListItem>
        <Link onClick={toggleMenu} to="/products">Products</Link>
      </MenuListItem>
    </MenuList>
  )
}
 
MainMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired
}

export default MainMenu
