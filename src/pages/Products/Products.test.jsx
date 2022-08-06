import {screen, render} from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'store/store'
import mockCategories from '../../mocks/en-us/product-categories.json'
import mockProducts from '../../mocks/en-us/products.json'
import mockFilteredProducts from '../../mocks/en-us/filtered-products.json'
import mockPaginatedProducts from '../../mocks/en-us/products-pagination.json'
import { Sidebar } from 'components'
import Products from './Products'
import userEvent from '@testing-library/user-event'

describe('Product List Page', () => {

  describe('Product Category Sidebar', () => {
    it('is fetching and rendering data from the API', async () => {
      render(
        <Provider store={store}>
          <Router>
            <Sidebar />
          </Router>
        </Provider>
      )

      const categories = await screen.findByTestId('filter-categories')
      const { results_size } = mockCategories

      expect(categories).toBeInTheDocument()
      expect(categories.childElementCount).toBe(results_size)
    })
  })

  describe('Category links', () => {
    it('are filtering Products Grid correctly interacting with the API', async () => {
      const user = userEvent.setup()

      const {rerender} = render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )
      
      //Find Category filter
      const categoryFilter = await screen.findByRole('button', {
        name: /Bed & Bath/i
      })
      expect(categoryFilter).toBeInTheDocument()

      //Apply filter category with Api call
      await user.click(categoryFilter)
      rerender(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )
      const filteredProducts = await screen.findByTestId('products-list')
      const filteredProductsSize = mockFilteredProducts.results_size
      const originalProductsSize = mockProducts.results_size
      expect(filteredProducts.childElementCount).not.toBe(originalProductsSize)
      expect(filteredProducts.childElementCount).toBe(filteredProductsSize)
    })

  })

  describe('Pagination Controls', () => {
    it('clear filters interacting with the API', async () => {
      const user = userEvent.setup()

      const {rerender} = render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )
      const filteredProducts = await screen.findByTestId('products-list')
      const filteredProductsSize = mockFilteredProducts.results_size
      expect(filteredProducts.childElementCount).toBe(filteredProductsSize)

      //Find Clear filter
      const clearFilters = await screen.findByRole('button', {
        name: /Clear filters/i
      })
      expect(clearFilters).toBeInTheDocument()

      //Clear filter category with Api call
      await user.click(clearFilters)
      rerender(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )
      const products = await screen.findByTestId('products-list')
      expect(products.childElementCount).not.toBe(filteredProductsSize)
    })

    it('are generated correctly based on the number of results fetched from the API and the maximum number of products per page', async () => {
      const { total_pages, results_per_page } = mockProducts
      const paginationArrows = 2

      render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )      

      const paginationItems = await screen.findByTestId('pagination-list')
      const products = await screen.findByTestId('products-list')
      expect(paginationItems.childElementCount).toBe(total_pages + paginationArrows)
      expect(products.childElementCount).toBe(results_per_page)
    })

    it('Prev button is disabled when the user is on the first page', async () => {
       render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )      

      const prevButton = await screen.findByTestId('prev-button')
      expect(prevButton).toBeDisabled()
    })

    it('Next button is working as expected', async () => {
      const user = userEvent.setup()

      const { rerender } = render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )      

      //Validate products on first page
      const products = await screen.findByTestId('products-list')
      const productsSize = mockProducts.results_size
      expect(products.childElementCount).toBe(productsSize)

      const nextButton = await screen.findByTestId('next-button')
      await user.click(nextButton)

      rerender(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )

      //Validate products changed after change page
      const paginatedProducts = await screen.findByTestId('products-list')
      const paginatedProductsSize = mockPaginatedProducts.results_size
      expect(paginatedProducts.childElementCount).toBe(paginatedProductsSize)
    })


    it('Next button is disabled when the user is on the last page', async () => {
      render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )      

      const nextButton = await screen.findByTestId('next-button')
      expect(nextButton).toBeDisabled()
    })

    it('Prev button is working as expected', async () => {
      const user = userEvent.setup()

      const { rerender } = render(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )      

      //Validate products are not in the first page
      const paginatedProducts = await screen.findByTestId('products-list')
      const paginatedProductsSize = mockPaginatedProducts.results_size
      expect(paginatedProducts.childElementCount).toBe(paginatedProductsSize)
     
      const prevButton = await screen.findByTestId('prev-button')
      await user.click(prevButton)

      rerender(
        <Provider store={store}>
          <Router>
            <Products />
          </Router>
        </Provider>
      )
      
      //Validate products changed after change page
      const products = await screen.findByTestId('products-list')
      const productsSize = mockProducts.results_size
      expect(products.childElementCount).toBe(productsSize)
    })
  })

})
