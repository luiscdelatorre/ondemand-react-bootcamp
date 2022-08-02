import { CartProducts } from 'components'
import { Container, Title } from './Cart.styles'

const Cart = () => {
  return (
    <Container className='container'>
      <Title className='section-title'>Cart</Title>
      <CartProducts />
    </Container>
  ) 
}

export default Cart 
