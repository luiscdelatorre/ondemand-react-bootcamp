import React from 'react'
import { Loader } from 'components'
import { useCartProducts } from 'utils/hooks'
import {
  Column,
  Container,
  LinkButton,
  PaymentButton,
  Row,
  Table,
  Total,
} from './CheckoutSummary.styles'
import { TbArrowLeft, TbLock } from 'react-icons/tb'

const CheckoutSummary = () => {
  const SHIPPING_COST = 0
  const { products, totalItems, subtotal, isLoading } = useCartProducts()
  const total = subtotal + SHIPPING_COST

  return (
    <>
    {isLoading
      ? <Loader />
      : <Container>
          <Table>
            <Row>
              <LinkButton className='button' to="/cart"><TbArrowLeft />Back to Cart</LinkButton>
            </Row>
            <hr />
            {products.map(({id, data: { name, price }, quantity}) => (
              <Row key={id}>
                <Column><b>({ quantity })</b> { name }</Column>
                <Column><b>${ price }</b></Column>
              </Row>
            ))}
            <hr />
            <Row>
              <Column><b>({totalItems})</b> Items</Column>
              <Column><b>${subtotal.toFixed(2)}</b></Column>
            </Row>
            <Row>
              <Column>Shipping</Column>
              <Column><b>Free</b></Column>
            </Row>
            <hr />
            <Row>
              <Total><b>Total</b></Total>
              <Total><b>${total.toFixed(2)}</b></Total>
            </Row>
            <PaymentButton disabled type='button'><TbLock />Confirm and pay</PaymentButton>
          </Table>
        </Container>
      }
    </>
  )
}

export default CheckoutSummary
