import React, { useEffect, useRef } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
 SearchButton,
 SearchbarContainer,
 SearchInput,
 SearchForm
} from './Searchbar.styles'

const Searchbar = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const inputEl = useRef('')

  useEffect(() => {
    inputEl.current.value = searchParams.get('search')
  }, [searchParams])

  const onSearch = (event) => {
    event.preventDefault()
    const hasContent = !!inputEl.current.value?.trim()
    if (hasContent) {
      navigate({
        pathname: '/search',
        search: `?search=${inputEl.current.value}`
      })
    }
  }
  
  return (
    <SearchbarContainer>
        <SearchForm>
          <SearchInput
            type="search"
            placeholder="Search"
            ref={inputEl}
          />
          <SearchButton type="submit" onClick={onSearch}>
            <IoSearchOutline />
          </SearchButton>
        </SearchForm>
    </SearchbarContainer>
  )
}

export default Searchbar
