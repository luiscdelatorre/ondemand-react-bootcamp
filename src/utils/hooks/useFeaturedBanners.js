import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'

const useFeaturedBanners = () => {
  const { data, isLoading } = useFetch(getSearchParams())
  const { results = [] } = data

  return {
    featuredBanners: results,
    isLoading
  }
}

const getSearchParams = () => {
  const params = [
    {
      q: '[[at(document.type, "banner")]]'
    },
    {
      lang: 'en-us'
    },
    {
      pageSize: 5
    }
  ]
  return getSearchQuery(params)
}

export default useFeaturedBanners
