import React from 'react'
import { FilterButton } from './Filter.styles'
import PropTypes from 'prop-types'

const Filter = ({ name, active, toggleFilter }) => {
  return (
    <FilterButton 
      type='button' 
      onClick={() => toggleFilter()}
      active={active}
    >
      { name }
    </FilterButton>
  )
}

Filter.propTypes = {
  name: PropTypes.string,
  active: PropTypes.bool,
  toggleFilter: PropTypes.func
}

export default Filter 
