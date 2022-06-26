import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { SearchStyled, SearchButtonStyled } from './Searchbar.styles'

const Searchbar = () => {
  
  return (
    <SearchStyled>
      <SearchButtonStyled>
        <IoSearchOutline />
      </SearchButtonStyled>
      {/* <form>
        <SearchInputStyled
          type="search"
          placeholder="Search"
        />
      </form> */}
    </SearchStyled>
  )
}

export default Searchbar
