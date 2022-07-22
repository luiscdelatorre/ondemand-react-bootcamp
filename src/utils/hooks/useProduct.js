import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'

const useProduct = (id) => {
  const { data, isLoading } = useFetch(getSearchParams(id))
  const { results = [] } = data
  const product = mapProduct(results[0])

  return {
    product,
    isLoading
  }
}

const getSearchParams = (id) => {
  const params = [
    {
      q: `[[at(document.id, "${id}")]]`
    },
    {
      lang: 'en-us'
    }
  ]
  return getSearchQuery(params)
}

const mapProduct = (product) => {
  return {
    data: {
      ...product?.data,
      tags: product?.tags
    }
  }
}

export default useProduct
