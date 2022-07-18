import React from 'react'
import { Card, Loader, Pagination } from 'components'
import {
 Grid,
 GridContainer,
 GridFooter,
 GridHeader
} from './ProductsList.styles'
import { useProducts } from 'utils/hooks'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from 'store/filterSlice'

const ProductsList = () => {
  const dispatch = useDispatch()
  const filters = useSelector(state => state.filters.value)
  const { 
    products, 
    total, 
    isLoading,
    pagination
  } = useProducts(filters, [])

  const changePage = (page) => {
    dispatch(setPage(page))
  }

  return (
    <GridContainer>
    {isLoading
      ? <Loader />
      : <>
          <GridHeader>
            <p>Total items: <span>{ total }</span></p>
          </GridHeader>
            <Grid>
              {products.map(item => (
                <Card key={item.id} item={item} />
              ))}
            </Grid>
          <GridFooter>
            <Pagination 
              pagination={pagination} 
              changePage={(page) => changePage(page)}
            />
          </GridFooter>
        </>
      }
    </GridContainer>
  )
}

export default ProductsList
