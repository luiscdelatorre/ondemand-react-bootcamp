
import {AddToCartButton} from './AddToCart.styles'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import QuantityModifier from './components/QuantityModifier'
import { removeFromCart, updateCart } from 'store/cartSlice'

const AddToCart = ({ id, stock, showLabel }) => {
  const cart = useSelector(state => state.cart)
  const currentProduct = cart.find(item => item.id === id)
  const dispatch = useDispatch()

  const addToCart = (event) => {
    event.preventDefault()
    updateItemInCart(1)
  }

  const updateItemInCart = (quantity) => {
    const isEmpty = quantity === 0
     
    if (isEmpty) {
      dispatch(removeFromCart(id))
    } else {
      const item = {
        id,
        quantity
      }
      dispatch(updateCart(item))
    }
  }

  return (
    <>
      {currentProduct
        ?<QuantityModifier 
          stock={stock}
          quantity={currentProduct.quantity}
          onUpdate={updateItemInCart}
          showLabel={showLabel} 
          />
       :<AddToCartButton type='button' onClick={ addToCart }>Add to Cart</AddToCartButton>
      }
    </>
  )
}

AddToCart.propTypes = {
  id: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  showLabel: PropTypes.bool
} 

export default AddToCart
