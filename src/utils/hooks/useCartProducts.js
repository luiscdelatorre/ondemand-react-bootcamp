import { getSearchQuery } from 'utils/searchQuery'
import useFetch from './useFetch'
import { useSelector } from 'react-redux'

const useCartProducts = () => {
  const cart = useSelector(state => state.cart)
  const ids = cart.map(item => item.id)
  const { data, isLoading } = useFetch(getSearchParams(ids))
  const { results = [] } = data
  const products = mapProducts(cart, results)
  const totalItems = products.reduce((sum, { quantity }) => sum + quantity, 0)
  const subtotal = products.reduce((sum, { quantity, data }) => sum + (quantity * data.price), 0)

  return {
    products,
    subtotal,
    totalItems,
    isLoading,
  }
}

const getSearchParams = (ids) => {
  const productsIds = ids.map(id => `"${id}"`)
  const params = [
    {
      q: '[[at(document.type, "product")]]'
    },
    {
      q: `[[any(document.id, [${productsIds}])]]`
    },
    {
      lang: 'en-us'
    },
    {
      pageSize: 100
    }
  ]

  return getSearchQuery(params)
}

const mapProducts = (cart, products) => {
  const cartIsEmpty = !cart.length

  if (cartIsEmpty) {
    return []
  }

  return products.map(item => {
    const { quantity } = cart.find(cartItem => cartItem.id === item.id) || 0
    const subtotal = item.data.price * quantity 
    return {
      ...item,
      quantity,
      subtotal
    }
  })
}

export default useCartProducts
