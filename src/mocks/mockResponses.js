
import mockFeaturedBanners from 'mocks/en-us/featured-banners.json'
import mockCategories from 'mocks/en-us/product-categories.json'
import mockFeaturedProducts from 'mocks/en-us/featured-products.json'
import mockProducts from 'mocks/en-us/products.json'
import mockProductsPagination from 'mocks/en-us/products-pagination.json'
import mockProduct from 'mocks/en-us/product.json'
import mockFilteredProducts from 'mocks/en-us/filtered-products.json'
import mockSearchProducts from 'mocks/en-us/search-products.json'
import mockEmptyResponse from 'mocks/en-us/empty-response.json'
import mockCartProducts from 'mocks/en-us/cart-products.json'

const PRODUCT_ID = 'YWL8XBIAAC0AzuPZ'
const CATEGORY_ID = 'YWHx-xIAAC0Ayj7i'
const SEARCH_WORD = 'floor'
const NEXT_PAGE = 2

const getMockResponse = (query, page) => {  
    const isBanner = query[0].includes('banner')  
    if (isBanner) {
      return mockFeaturedBanners
    } 
    
    const isCategory = query[0].includes('category')
    if (isCategory) {
      return mockCategories
    }

    const isSingleProduct = query[0].includes(PRODUCT_ID)
    if (isSingleProduct) {
      return mockProduct
    }
    
    const isProductsList = query[0].includes('product')
    if (isProductsList) {

      const isFiltered = query[1].includes(CATEGORY_ID)
      if(isFiltered) {
        return mockFilteredProducts
      }
      
      const isSearch = query[1].includes('fulltext')
      if (isSearch) {
        if (query[1].includes(SEARCH_WORD)) {
          return mockSearchProducts
        }
        return mockEmptyResponse
      }
      
      const isCart = query[1].includes('document.id')
      if (isCart) {
        return mockCartProducts
      }

      const hasTags = query.length > 2
      if (hasTags) {
        const isFeatured = query[2].includes('Featured')
        if (isFeatured) {
          return mockFeaturedProducts
        } 
      }

      const hasPagination = ~~page === NEXT_PAGE
       if(hasPagination) {
        return mockProductsPagination
      }

      return mockProducts
    } 
    
    return mockEmptyResponse
}


export default getMockResponse
