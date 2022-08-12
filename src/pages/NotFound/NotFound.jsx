import { TbHome } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { Container, Title, Subtitle } from './NotFound.styles'
import image404 from 'assets/404.gif'

const NotFound = () => {

  return (
    <Container className="container">
      <Title>We're sorry.</Title>
      <Subtitle>We lost this page.</Subtitle>
      <img src={image404} alt="not found" />
      <Link className='button' to="/home"><TbHome />Go to Home page</Link>
    </Container>
  )
}

export default NotFound 
