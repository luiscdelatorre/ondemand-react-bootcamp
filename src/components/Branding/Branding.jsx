import logo from 'assets/logo.svg'
import { LogoStyled } from './Branding.styles'
import PropTypes from 'prop-types'

const Branding = ({ navigate }) => {
  return (
    <LogoStyled data-testid="name" onClick={() => navigate('home')}>
      <img data-testid="logo" src={logo} alt="logo" />
    </LogoStyled>
  )
}
 
Branding.propTypes = {
  open: PropTypes.bool,
  navigate: PropTypes.func
}

export default Branding
