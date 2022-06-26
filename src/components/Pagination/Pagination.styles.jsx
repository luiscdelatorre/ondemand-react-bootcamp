import styled from 'styled-components'

const PaginationContainer = styled.nav`
  text-align: center;
`

const PaginationList = styled.ul`
  border-radius: 2rem;
  display: inline-flex;
`
const PageItem = styled.li`
  &:first-child a {
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    margin-left: 0;
  }
  &:last-child a {
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`

const PageLink = styled.a`
  border: 1px solid #dee2e6;
  cursor: pointer;
  display: block;
  font-weight: 700;
  line-height: 1.25;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  position: relative;
  text-decoration: none;
`

export { 
  PaginationList,
  PageItem,
  PageLink,
  PaginationContainer
} 
