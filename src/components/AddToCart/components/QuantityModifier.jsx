import {
 ButtonsContainer,
 QtyButton,
 QtyInput,
 QtyLabel 
} from './QuantityModifier.styles'
import PropTypes from 'prop-types'
import { TbMinus, TbPlus } from 'react-icons/tb'

const QuantityModifier = ({ quantity, stock, onUpdate, showLabel = true }) => {

  const increaseQty = (event) => {
    event.preventDefault()
    if (quantity < stock) {
      onUpdate(quantity + 1)
    }
  }

  const decreaseQty = (event) => {
    event.preventDefault()
    if (quantity > 0) {
      onUpdate(quantity - 1)
    }
  }

  const updateQty = (event) => {
    const { value } = event.target
    if (value >= 0 && value <= stock) {
      onUpdate(~~value)
    } 
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <ButtonsContainer onClick={handleClick}> 
      <QtyButton type="button" onClick={ decreaseQty }><TbMinus /></QtyButton>
      <QtyInput type="number" onChange={ updateQty } value={ quantity } />
      {showLabel ? <QtyLabel>Added to Cart</QtyLabel> : null}
      <QtyButton type="button" onClick={ increaseQty }><TbPlus /></QtyButton>
    </ButtonsContainer>
  )
}

QuantityModifier.propTypes = {
  quantity: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  showLabel: PropTypes.bool
} 

export default QuantityModifier
