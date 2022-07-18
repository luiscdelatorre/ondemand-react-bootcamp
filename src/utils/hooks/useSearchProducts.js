import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'
import { useSelector } from 'react-redux'

const useSearchProducts = (searchText, pageSize = 20) => {
  const currentPage = useSelector(state => state.filters.currentPage)
  const { data, isLoading } = useFetch(getSearchParams(currentPage, searchText, pageSize))
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

const getSearchParams = (currentPage, searchText, pageSize) => {
  const params = [
    {
      q: '[[at(document.type, "product")]]'
    },
    {
      q: `[[fulltext(document, "${searchText}")]]`
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

export default useSearchProducts
