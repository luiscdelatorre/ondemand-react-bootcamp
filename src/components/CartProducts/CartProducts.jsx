import React, { useEffect, useState } from 'react'
import { Loader } from 'components'
import {
 Grid,
 GridContainer,
 GridFooter,
 GridHeader,
 Subtitle,
} from './CartProducts.styles'
import { useCartProducts } from 'utils/hooks'
import CartProduct from './components/CartProduct/CartProduct'
import CartSummary from './components/CartSummary/CartSummary'
import { Link } from 'react-router-dom'

const CartProducts = () => {
  const { products, totalItems, subtotal, isLoading } = useCartProducts()
  const [cartIsEmpty, setCartIsEmpty] = useState(true)
  useEffect(() => {
    setCartIsEmpty(!products.length)
  }, [products.length])

  return (
    <GridContainer>
    {isLoading
      ? <Loader />
      : cartIsEmpty
        ? <GridHeader>
            <Subtitle>Your shopping cart is empty</Subtitle>
            <Link to="/products">See all products</Link>
          </GridHeader>
        : <>
            <Grid data-testid="cart-list">
              {products.map(item => (
                <CartProduct key={item.id} item={item} />
              ))}
            </Grid>
            <GridFooter>
              <CartSummary totalItems={totalItems} subtotal={subtotal} />
            </GridFooter>
          </>
      }
    </GridContainer>
  )
}

export default CartProducts
