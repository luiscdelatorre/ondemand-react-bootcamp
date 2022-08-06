import { Counter, ShoppingCartButton } from './ShoppingCart.styles'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const ShoppingCart = () => {
  const MAX_COUNTER = 99
  const cart = useSelector(state => state.cart)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const counter = totalItems > MAX_COUNTER ? MAX_COUNTER : totalItems

  return (
    <ShoppingCartButton to="/cart">
      <IoCartOutline />
      <Counter counter={counter}>{ counter }</Counter>
    </ShoppingCartButton>
  )
}

export default ShoppingCart
