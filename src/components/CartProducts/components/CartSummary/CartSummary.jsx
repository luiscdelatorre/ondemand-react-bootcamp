import { TbCreditCard } from 'react-icons/tb'
import {
 Container,
 LinkButton,
 SummaryColumn,
 SummaryRow,
 SummaryTable,
 SummaryTotal 
} from './CartSummary.styles'

const CartSummary = ({ totalItems, subtotal }) => {

  return (
    <Container>
      <SummaryTable>
        <SummaryRow>
          <LinkButton to="/checkout">
            <TbCreditCard />Go to checkout
          </LinkButton>
        </SummaryRow>
        <hr />
        <SummaryRow>
          <SummaryColumn><b>({totalItems})</b> Items</SummaryColumn>
          <SummaryColumn><b>${subtotal}</b></SummaryColumn>
        </SummaryRow>
        <SummaryRow>
          <SummaryColumn>Shipping</SummaryColumn>
          <SummaryColumn><b>Free</b></SummaryColumn>
        </SummaryRow>
        <hr />
        <SummaryRow>
          <SummaryTotal><b>Subtotal</b></SummaryTotal>
          <SummaryTotal><b data-testid="cart-subtotal">${subtotal.toFixed(2)}</b></SummaryTotal>
        </SummaryRow>
      </SummaryTable>
    </Container>
  )
}

export default CartSummary
