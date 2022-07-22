import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'
import { useSelector } from 'react-redux'

const useProducts = (filters = [], tags=[], pageSize = 12) => {
  const currentPage = useSelector(state => state.filters.currentPage)
  const { data, isLoading } = useFetch(getSearchParams(currentPage, filters, tags, pageSize))
  const {
    results = [], 
    total_results_size,
    total_pages,
    page,
    next_page,
    prev_page
  } = data

  return {
    products: results,
    total: total_results_size,
    isLoading,
    pagination: {
      totalPages: total_pages,
      currentPage: page,
      nextPage: next_page,
      prevPage: prev_page
    }
  }
}

const getSearchParams = (currentPage, filters, tags, pageSize) => {
  const categories = filters.map(({id}) => `"${id}"`)
  const tagsQuery = tags.map((tag) => `"${tag}"`)
  const params = [
    {
      q: '[[at(document.type, "product")]]'
    },
    {
      q: `[[any(my.product.category, [${categories}])]]`
    },
    {
      q: `[[at(document.tags, [${tagsQuery}])]]`
    },
    {
      lang: 'en-us'
    },
    {
      page: currentPage
    },
    {
      pageSize
    }
  ]

  return getSearchQuery(params)
}

export default useProducts
