import PropTypes from 'prop-types'
import {
 Stock,
 Price,
 FeaturesList,
} from './ProductPurchase.styles'
import { TbCoin, TbShieldCheck, TbTruckDelivery } from 'react-icons/tb'
import { AddToCart } from 'components'

const ProductPurchase = ({ stock, price, productId }) => {
  const hasStock = stock > 0

  return (
    <div>
      <Price>${ price }</Price>
      <Stock hasStock={ hasStock }>{ hasStock ? 'Available' : 'Out of stock' }</Stock>
      <p><span>{ stock } in stock</span></p>
      <hr />
      <FeaturesList>
        <li>
          <p><TbTruckDelivery /><span>Free Shipping</span></p>
        </li>
        <li>
          <p><TbShieldCheck /><span>Secure Transaction</span></p>
        </li>
        <li>
          <p><TbCoin /><span>Money Back Guarantee</span></p>
        </li>
      </FeaturesList>
      <hr />
      {hasStock
        ? <AddToCart type="button" id={ productId } stock={ stock } />
        : <button type="button" disabled>Out of stock</button>
      }
    </div>
  )
}

ProductPurchase.propTypes = {
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
}

export default ProductPurchase 
