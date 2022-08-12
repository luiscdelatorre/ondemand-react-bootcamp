import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import mockCartProducts from 'mocks/en-us/cart-products.json'
import userEvent from '@testing-library/user-event'
import store from 'store/testStore'
import { CartProducts } from 'components'


describe('Shopping Cart Page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Validate that the list of products is shown when there are items in the cart.', async () => {
    render(
      <Provider store={store}>
        <Router>
          <CartProducts />
        </Router>
      </Provider>
    )
    const cartList = await screen.findByTestId('cart-list')
    const { results_size } = mockCartProducts
    expect(cartList.childElementCount).toBe(results_size)

    const { data: { mainimage, name, price }} = mockCartProducts.results[0]
    //Each row should contain the main image of the product,
    const mainImage = await screen.findByAltText(mainimage.alt)
    expect(mainImage).toBeInTheDocument()
    // its name, 
    const productName = await screen.findByText(name)
    expect(productName).toBeInTheDocument()
    //unit price 
    const productPrice = await screen.findAllByText(`$${price}.00`)
    expect(productPrice[0]).toBeInTheDocument()
    //a quantity selector, 
    const input = await screen.findByRole('spinbutton')
    expect(input).toBeInTheDocument()
    //subtotal and a “remove from cart icon”.
    const removeButton = await screen.findByTestId('remove-button')
    expect(removeButton).toBeInTheDocument()
  })

  it('Validate that the cart total label displays the sum of the subtotals of all items in the cart.', async () => {
    render(
      <Provider store={store}>
        <Router>
          <CartProducts />
        </Router>
      </Provider>
    )
    const cartTotal = await screen.findByTestId('cart-subtotal')
    expect(cartTotal.innerHTML).toBe('$40.00')
  })

  it('Validate that you can update the quantity of items for a particular product in the cart. Don’t forget to validate that you don’t exceed the stock units available for the selected product.', async () => {
    const user = userEvent.setup()

    render(
      <Provider store={store}>
        <Router>
          <CartProducts />
        </Router>
      </Provider>
    )

    const cartTotal = await screen.findByTestId('cart-subtotal')
    expect(cartTotal.innerHTML).toBe('$40.00')
    const input = await screen.findByRole('spinbutton')
    expect(input).toHaveValue(1)


    // add two elements
    const addButton = await screen.findByTestId('add-button')
    await user.click(addButton)
    await user.click(addButton)

    // total and qty updated
    const cartTotalUpdated = await screen.findByTestId('cart-subtotal')
    expect(cartTotalUpdated.innerHTML).toBe('$120.00')
    const inputUpdated = await screen.findByRole('spinbutton')
    expect(inputUpdated).toHaveValue(3)

    // User cannot add more elements in stock
    await user.click(addButton)
    const cartTotalUpdatedStock = await screen.findByTestId('cart-subtotal')
    expect(cartTotalUpdatedStock.innerHTML).toBe('$120.00')
    const inputStockLimit = await screen.findByRole('spinbutton')
    expect(inputStockLimit).toHaveValue(3)
  })

  it('Validate that you can remove a product from the cart after clicking on the “remove from cart icon”.', async () => {
    const user = userEvent.setup()

    render(
      <Provider store={store}>
        <Router>
          <CartProducts />
        </Router>
      </Provider>
    )

    const removeButton = await screen.findByTestId('remove-button')
    await user.click(removeButton)

    // Cart is empty after remove item
    const { cart } = store.getState()
    expect(cart.length).toBe(0)
    expect(await screen.findByText(/Your shopping cart is empty/i)).toBeInTheDocument()
  })

  it('Validate that an empty state is displayed when there are no items in the cart.', async () => {
    render(
      <Provider store={store}>
        <Router>
          <CartProducts />
        </Router>
      </Provider>
    )

    const emptyCart = await screen.findByText(/Your shopping cart is empty/i)
    expect(emptyCart).toBeInTheDocument()
  })
})
