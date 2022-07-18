import React from 'react'
import { FilterButton } from './Filter.styles'
import PropTypes from 'prop-types'

const Filter = ({ name, active, toggleFilter }) => {
  return (
    <FilterButton 
      type='button' 
      onClick={() => toggleFilter()}
      active={ active }
    >
      { name }
    </FilterButton>
  )
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  toggleFilter: PropTypes.func.isRequired
}

export default Filter 
