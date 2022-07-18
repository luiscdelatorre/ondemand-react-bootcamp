import PropTypes from 'prop-types'
import {
 AddToCart,
 ButtonsContainer,
 QtyButton,
 Stock,
 Price,
 QtyInput
} from './ProductPurchase.styles'
import { FaDonate, FaShieldAlt, FaTruck } from 'react-icons/fa'
import { useState } from 'react'

const ProductPurchase = ({ stock, price }) => {
  const [quantity, setQuantity] = useState(1)

  const increaseQty = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const updateQty = (event) => {
    const { value } = event.target
    if (value > 0 && value <= stock) {
      setQuantity(~~value)
    } 
  }

  return (
    <div>
      <Price>${ price }</Price>
      <Stock>Available</Stock>
      <p><span>{ stock } in stock</span></p>
      <hr />
      <p><FaTruck />Free Shipping</p>
      <p><FaShieldAlt />Secure Transaction</p>
      <p><FaDonate />Money Back Guarantee</p>
      <hr />
      <p>Quantity: { quantity }</p>
      <ButtonsContainer>
        <QtyButton type="button" onClick={ decreaseQty }>-</QtyButton>
        <QtyInput type="number" onChange={ updateQty } value={ quantity } />
        <QtyButton type="button" onClick={ increaseQty }>+</QtyButton>
      </ButtonsContainer>
      <AddToCart>Add to Cart</AddToCart>
    </div>
  )
}

ProductPurchase.propTypes = {
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
}

export default ProductPurchase 
