import React from 'react'
import {Loader, Pagination, SearchCard} from 'components'
import {
 Grid,
 GridContainer,
 GridFooter,
 GridHeader,
 Subtitle
} from './SearchList.styles'
import { useSearchProducts } from 'utils/hooks'
import { useDispatch } from 'react-redux'
import { setPage } from 'store/filterSlice'
import { useSearchParams } from 'react-router-dom'

const SearchList = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const { 
    products,
    total, 
    isLoading,
    pagination 
  } = useSearchProducts(searchParams.get('search'))

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
          {products.length 
           ? <Grid>
             {products.map(item => (
              <SearchCard key={ item.id } item={ item } />
             ))}
            </Grid>
           : <Subtitle>Your Search returned 0 results. Please try again.</Subtitle>
          }
          {products.length 
            ? <GridFooter>
              <Pagination 
                pagination={ pagination } 
                changePage={(page) => changePage(page)}
              />
            </GridFooter>
            : null
          }
        </>
      }
    </GridContainer>
  )
}

export default SearchList
