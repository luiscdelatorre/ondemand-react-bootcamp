import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'

const useCategories = (pageSize = 30) => {
  const { data, isLoading } = useFetch(getSearchParams(pageSize))
  const { results = [] } = data

  return {
    categories: results,
    isLoading
  }
}

const getSearchParams = (pageSize) => {
  const params = [
    {
      q: '[[at(document.type, "category")]]'
    },
    {
      lang: 'en-us'
    },
    {
      pageSize
    }
  ]
  return getSearchQuery(params)
}

export default useCategories
