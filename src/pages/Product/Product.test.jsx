import {screen, render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import store from 'store/store'
import Product from './Product'
import mockProduct from 'mocks/en-us/product.json'
import userEvent from '@testing-library/user-event'
import * as useProduct from 'utils/hooks/useProduct'

describe('Product Detail Page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('is fetching and rendering data from the API for a particular product.', async () => {
    render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
            <Routes>
              <Route path="product/:productId" element={<Product />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      )

      const productDetail = await screen.findByTestId('product-detail')
      expect(productDetail).toBeInTheDocument()
  })

  it('contains the following labels: name of the selected product, current price, SKU, category name, a list of tags, and description.', async () => {
    const {results } = mockProduct
    const product = results[0]

    render(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
            <Routes>
              <Route path="product/:productId" element={<Product />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      )

      const { tags, data: {name, price, sku, category, short_description }} = product
        
      // name of the selected product, 
      const productName = await screen.findByRole('heading', {
        level: 2,
        name
      })
      expect(productName).toBeInTheDocument()

      // current price
      const productPrice = await screen.findByRole('heading', {
        level: 3,
        name: `$${price}`
      })
      expect(productPrice).toBeInTheDocument()

      //SKU
      const productSku = await screen.findByText(`Sku: ${sku}`)
      expect(productSku).toBeInTheDocument()
      
      //category name
      const productCategory = await screen.findByText(category.slug)
      expect(productCategory).toBeInTheDocument()

      //a list of tags
      const productTags = await screen.findByTestId('product-tags')
      expect(productTags.childElementCount).toBe(tags.length)
      
      //and description.
      const productDescription = await screen.findByText(short_description)
      expect(productDescription).toBeInTheDocument()
  })

  it('Product Detail Page contains a quantity selector and an “Add to Cart” button.', async () => {
    const user = userEvent.setup()
    
    const {rerender} = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
          <Routes>
            <Route path="product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
   
    const addToCart = await screen.findByRole('button', {
      name: /Add to Cart/i
    })
    expect(addToCart).toBeInTheDocument()
    await user.click(addToCart)
  
    //after click button is hidden and input is displayed
    rerender(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
          <Routes>
            <Route path="product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )
    expect(addToCart).not.toBeInTheDocument()
    const input = await screen.findByRole('spinbutton')
    expect(input).toBeInTheDocument()
  })

  it('Validate that after clicking on the “Add to Cart” button, the number of items that are selected in quantity selector control are added to the cart.', async () => {
    const { cart } = store.getState()
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
          <Routes>
            <Route path="product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    //product added to cart matches with data in store
    const input = await screen.findByRole('spinbutton')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(totalItems)
  })

  it('Validate that the “Add to Cart” button is disabled when the stock units available for the selected product is zero.', async () => {
    jest.spyOn(useProduct, 'default').mockImplementation(() => {
      const { results } = mockProduct
      const noStockProduct = results[0]
      noStockProduct.data = {
        ...noStockProduct.data,
        tags: noStockProduct.tags,
        stock: 0
      }

      return {
        product: noStockProduct,
        isLoading: false
      }
    })
    
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/product/YWL8XBIAAC0AzuPZ']}>
          <Routes>
            <Route path="product/:productId" element={<Product />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    )

    //Out of stock button replaces Add to Cart button
    const outOfStockButton = await screen.findByRole('button', {
      name: /Out of stock/i
    })
    expect(outOfStockButton).toBeInTheDocument()
    expect(outOfStockButton).toBeDisabled()
  })
})
