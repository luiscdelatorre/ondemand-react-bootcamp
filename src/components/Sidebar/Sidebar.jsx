import { Aside, Title } from './Sidebar.styles'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilters, setPage } from 'store/filterSlice'
import CategoriesFilter from './components/CategoriesFilter/CategoriesFilter'

const Sidebar = () => {
  const dispatch = useDispatch()
  const updateFilters = (newFilters) => {
    dispatch(setFilters(newFilters))
    dispatch(setPage(1))
  }

  return (
    <Aside>
      <Title>Filters</Title>
      <CategoriesFilter updateFilters={ updateFilters } />
    </Aside>
  )
}

export default Sidebar 
