import { Counter, ShoppingCartButton } from './ShoppingCart.styles'
import { IoCartOutline } from 'react-icons/io5'

const ShoppingCart = () => {
  const counter = 0

  return (
    <ShoppingCartButton>
      <IoCartOutline />
      <Counter>{ counter }</Counter>
    </ShoppingCartButton>
  )
}

export default ShoppingCart
