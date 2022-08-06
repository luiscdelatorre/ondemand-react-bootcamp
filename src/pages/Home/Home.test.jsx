import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from 'store/store'
import mockFeaturedBanners from '../../mocks/en-us/featured-banners.json'
import mockFeaturedCategories from '../../mocks/en-us/product-categories.json'
import mockFeaturedProducts from '../../mocks/en-us/featured-products.json'
import { FeaturedBanners, FeaturedCategories, FeaturedProducts } from 'components'

describe('Home Page', () => {

  it('Featured Banners Slider is fetching and rendering data from the API', async () => {
    render(
      <Provider store={store}>
        <Router>
          <FeaturedBanners />
        </Router>
      </Provider>
    )

    const slider = await screen.findByTestId('featured-banners')
    const slides = await screen.findAllByRole('img')
    const { results_size } = mockFeaturedBanners

    expect(slider).toBeInTheDocument()
    expect(slides.length).toBe(results_size)
  })

  it('Categories Grid is fetching and rendering data from the API', async () => {
    render(
      <Provider store={store}>
        <Router>
          <FeaturedCategories />
        </Router>
      </Provider>
    )

    const featuredCategories = await screen.findByTestId('featured-categories')
    const categories = await screen.findAllByRole('img')
    const { results_size } = mockFeaturedCategories

    expect(featuredCategories).toBeInTheDocument()
    expect(categories.length).toBe(results_size)
  })

  it('Featured Products Grid is fetching and rendering data from the API', async () => {
    render(
       <Provider store={store}>
        <Router>
            <FeaturedProducts />
        </Router>
      </Provider>
    )

    const featuredProducts = await screen.findByTestId('featured-products')
    const productImages = await screen.findAllByRole('img')
    const { results_size } = mockFeaturedProducts

    expect(featuredProducts).toBeInTheDocument()
    expect(productImages.length).toBe(results_size)
  })

})
