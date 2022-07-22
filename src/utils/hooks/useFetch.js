import { useState, useEffect } from 'react'
import { API_BASE_URL } from '../constants'
import { useLatestAPI } from './useLatestAPI'

const useFetch = (searchParams) => {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI()
  const [fetchData, setFetchData] = useState(() => ({
    data: {},
    isLoading: true,
  }))
 
  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }
    const controller = new AbortController()

    async function getFetchData() {
      try {
        setFetchData({
          data: {}, isLoading: true 
        })
        const path = `${API_BASE_URL}/documents/search?ref=${apiRef}${searchParams}`
        const response = await fetch(path,
          {
            signal: controller.signal,
          }
        )
        const data = await response.json()
        setFetchData({
          data, isLoading: false 
        })
      } catch (err) {
        setFetchData({
          data: {}, isLoading: false 
        })
        console.error(err)
      }
    }

    getFetchData()

    return () => {
      controller.abort()
    }
  }, [apiRef, isApiMetadataLoading, searchParams])

  return fetchData
}


export default useFetch
