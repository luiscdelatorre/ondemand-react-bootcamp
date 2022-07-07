import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe( 'App component', () => {
  it('Ecommerce Store logo appears correctly in the Header.', () => {
    render( <App /> )
    expect( screen.queryByTestId( 'logo' ) ).toBeInTheDocument()
  })
})
