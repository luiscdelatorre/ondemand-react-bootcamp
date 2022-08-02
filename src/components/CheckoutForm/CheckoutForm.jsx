import { isRequired, isValidEmail, isValidZipCode } from 'utils/validators'
import { Container, Form, Subtitle } from './CheckoutForm.styles'
import FormInput from './FormInput/FormInput'
import FormTextarea from './FormTextarea/FormTextarea'

const CheckoutForm = () => {
  return (
    <Container>
      <Form>
        <Subtitle>Ship to</Subtitle>
        <FormInput id="name" label="First name" validator={isRequired} />
        <FormInput id="lastname" label="Last name" validator={isRequired} />
        <FormInput id="email" label="Email" validator={isValidEmail} />
        <FormInput id="zipcode" label="ZIP code" validator={isValidZipCode} />
        <FormTextarea id="notes" label="Order notes" />
      </Form>
    </Container>
  )
}

export default CheckoutForm
