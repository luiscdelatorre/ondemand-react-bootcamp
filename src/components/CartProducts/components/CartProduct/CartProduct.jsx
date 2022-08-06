
import {
  CardActions,
  CardContainer, 
  CardImage, 
  CardName,
  CardPrice,
  CardSubtotal,
  RemoveButton,
  Stock
} from './CartProduct.styles'
import PropTypes from 'prop-types'
import { AddToCart } from 'components'
import { TbTrash } from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'store/cartSlice'

const CartProduct = ({ item }) => {
  const {
    id,
    subtotal,
    data: {
      name,
      stock,
      price,
      mainimage: { url, alt }
    },
  } = item
  const hasStock = stock > 0
  const dispatch = useDispatch()

  const handleRemove = (event) => {
    event.preventDefault()
    dispatch(removeFromCart(id))
  }

  return (
    <CardContainer>
      <CardImage>
        <img src={ url } alt={ alt } />
      </CardImage>
      <Stock hasStock={ hasStock }>{ hasStock ? 'Available' : 'Out of stock' }</Stock>
      <CardName to={`/product/${id}`}>{ name }</CardName>
      <CardPrice>${ price.toFixed(2) }</CardPrice>
      <CardSubtotal>${ subtotal.toFixed(2) }</CardSubtotal>
      <RemoveButton type="button" onClick={handleRemove} data-testid="remove-button"><TbTrash /></RemoveButton>
      <CardActions>
        {hasStock
          ? <AddToCart type="button" id={ id } stock={ stock } showLabel={false} />
          : <button type="button" disabled>Out of stock</button>
        }
      </CardActions>
    </CardContainer>
  )
}

CartProduct.propTypes = {
  item: PropTypes.object.isRequired
} 

export default CartProduct
