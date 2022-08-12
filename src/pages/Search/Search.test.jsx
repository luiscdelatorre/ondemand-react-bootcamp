import { screen, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import store from 'store/store'
import mockSearchProducts from '../../mocks/en-us/search-products.json'
import {SearchList} from 'components'

describe('Search Results Page', () => {
  it('Validate that the list of results is rendering data according to the “searchTerm” provided.', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search?search=z']} >
          <SearchList />
        </MemoryRouter>
      </Provider>
    )
    const noResults = await screen.findByRole('heading', {
      level: 3,
      name: /Your Search returned 0 results. Please try again./i
    })
    expect(noResults).toBeInTheDocument()
  })

  it('Validate that an empty state is displayed when there are no results for the “searchTerm” provided.', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/search?search=floor']} >
          <SearchList />
        </MemoryRouter>
      </Provider>
    )

    const searchList = await screen.findByTestId('search-list')
    const { results_size } = mockSearchProducts
    expect(searchList).toBeInTheDocument()
    expect(searchList.childElementCount).toBe(results_size)
  })

})
