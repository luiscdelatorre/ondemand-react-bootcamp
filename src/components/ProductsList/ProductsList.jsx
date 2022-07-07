import React from 'react'
import { useEffect, useState } from 'react'
import { Card, Loader, Pagination } from 'components'
import {
 Grid,
 GridContainer,
 GridFooter,
 GridHeader
} from './ProductsList.styles'
import products from 'mocks/en-us/products.json'
import PropTypes from 'prop-types'

const ProductsList = ({ filters }) => {
  const [loading, setLoading] = useState(true)
  const [filteredProducts, setFilteredProducts] = useState([])
  const { results } = products

  useEffect(() => {
    const filterItems = () => {
      const hasFilters = !!filters.length
      const items = hasFilters 
        ? results.filter(({ data }) => {
          const { id } = data.category
          return filters.includes(id)
        }) 
        : results
      setFilteredProducts(items)
    }
    const interval = setTimeout(() => {
      setLoading(false)
    }, 2000)

    filterItems()
    return () => clearTimeout(interval)
  }, [loading, results, filters])

  return (
    <GridContainer>
    {loading
      ? <Loader />
      : <>
          <GridHeader>
            <p>Total items: <span>{ filteredProducts.length }</span></p>
          </GridHeader>
            <Grid>
              {filteredProducts.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </Grid>
          <GridFooter>
            <Pagination />
          </GridFooter>
        </>
      }
    </GridContainer>
  )
}

ProductsList.propTypes = {
  filters: PropTypes.array
}

export default ProductsList
