import {
 Aside,
 Title,
 FilterTitle,
 FilterList
} from './Sidebar.styles'
import React from 'react'
import Filter from './components/Filter/Filter'
import categories from 'mocks/en-us/product-categories.json'
import PropTypes from 'prop-types'

const Sidebar = ({ filters, updateFilters }) => {
  const { results } = categories

  const toggleFilter = (newFilter) => {
    const filterIndex = filters.indexOf(newFilter)
    const newFilters = [...filters]

    if (filterIndex < 0) {
      newFilters.push(newFilter)
    } else {
      newFilters.splice(filterIndex, 1)
    }

    updateFilters(newFilters)
  }

  return (
    <Aside>
      <Title>Filters</Title>
      <div>
        <FilterTitle>By Category:</FilterTitle>
        <FilterList>
        {results.map(category => {
          const { id } = category
          const { name } = category.data
          const active = filters.includes(category.id)
          return (
            <li key={id} >
            <Filter 
              toggleFilter={() => toggleFilter(category.id)}
              active={active}
              name={ name } />
            </li>
          )
        })}
        </FilterList>
      </div>
      
    </Aside>
  )
}

Sidebar.propTypes = {
  filters: PropTypes.array,
  updateFilters: PropTypes.func
}

export default Sidebar 
