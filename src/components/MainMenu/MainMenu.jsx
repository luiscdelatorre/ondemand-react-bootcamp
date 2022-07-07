import { MenuList, MenuListItem } from './MainMenu.styles'
import PropTypes from 'prop-types'

const MainMenu = ({ open, navigate }) => {
  return (
    <MenuList open={open}>
      <MenuListItem>
        <span onClick={() => navigate('home')}>Home</span>
      </MenuListItem>
      <MenuListItem>
        <span onClick={() => navigate('products')}>Products</span>
      </MenuListItem>
    </MenuList>
  )
}
 
MainMenu.propTypes = {
  open: PropTypes.bool,
  navigate: PropTypes.func
}

export default MainMenu
