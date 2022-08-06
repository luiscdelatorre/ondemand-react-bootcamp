import { FilterTitle, FilterList } from '../../Sidebar.styles'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'components'
import useCategories from 'utils/hooks/useCategories'
import Filter from '../Filter/Filter'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const CategoriesFilter = ({ updateFilters }) => {
  const { categories, isLoading } = useCategories()
  const [ searchParam ] = useSearchParams()
  const filters = useSelector(state => state.filters.value)
  const hasFiltersSelected = !!filters.length 

  useEffect(() => {
    const categorySearchParam = searchParam.get('category')
    const filterFromQuery = categories.filter(({slugs}) => slugs.includes(categorySearchParam))
    const hasQueryFilters = !!filterFromQuery.length
    
    if (hasQueryFilters) { 
      updateFilters(filterFromQuery)
    }
  }, [categories, searchParam, updateFilters])

  const toggleFilter = (newFilter) => {
    if(!newFilter) {
      return updateFilters([])
    }

    const filterIndex = filters.map(({id}) => id).indexOf(newFilter.id)
    const newFilters = [...filters]
    const filterIsSelected = filterIndex >= 0

    if (filterIsSelected) {
      newFilters.splice(filterIndex, 1)
    } else {
      newFilters.push(newFilter)
    }

    updateFilters(newFilters)
  }

  return (
    <>
      <FilterTitle>By Category:</FilterTitle>
      {isLoading
      ? <Loader/>
      : <FilterList data-testid="filter-categories">
          {categories.map(category => {
            const {
              id,
              data: {name} 
            } = category
            const active = filters.map(filter => filter.id).includes(category.id)
            return (
              <li key={ id } >
                <Filter
                  toggleFilter={() => toggleFilter(category)}
                  active={ active }
                  name={ name } />
              </li>
            )
          })}
          {hasFiltersSelected && 
            <li>
              <Filter 
                toggleFilter={() => toggleFilter(null)}
                active={ false }
                name="Clear filters" />
            </li>
          }
        </FilterList>
      }
    </>
  )
}

CategoriesFilter.propTypes = {
  updateFilters: PropTypes.func.isRequired
}

export default CategoriesFilter 
