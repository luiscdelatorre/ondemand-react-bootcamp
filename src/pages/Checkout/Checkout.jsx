import { CheckoutForm, CheckoutSummary } from 'components'
import { Container, PageHeader, Title } from './Checkout.styles'

const Checkout = () => {
  return (
    <Container className='container'>
      <PageHeader>
        <Title className='section-title'>Checkout</Title>
      </PageHeader>
      <CheckoutForm />
      <CheckoutSummary />
    </Container>
  )
}

export default Checkout 
