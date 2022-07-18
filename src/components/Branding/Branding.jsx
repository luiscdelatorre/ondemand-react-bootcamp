import logo from 'assets/logo.svg'
import { Link } from 'react-router-dom'
import { Logo } from './Branding.styles'

const Branding = () => {
  return (
    <Logo data-testid="name">
      <Link to="/home">
        <img data-testid="logo" src={logo} alt="logo" />
      </Link>
    </Logo>
  )
}
 
export default Branding
