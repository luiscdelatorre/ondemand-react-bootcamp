import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Branding from './Branding'

describe('Branding component', () => {

  it('Ecommerce Store logo appears correctly in the Header.', () => {
    render(<BrowserRouter> <Branding /> </BrowserRouter>)
    expect(screen.queryByTestId('logo')).toBeInTheDocument()
  })

  it('Ecommerce Store name appears correctly in the Header.', () => {
    render(<BrowserRouter> <Branding /> </BrowserRouter>)
    expect(screen.queryByTestId('name')).toBeInTheDocument()
  })
})
