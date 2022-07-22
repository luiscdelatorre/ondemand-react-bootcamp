import styled from 'styled-components'

const PaginationContainer = styled.nav`
  text-align: center;
`

const PaginationList = styled.ul`
  border-radius: 2rem;
  display: inline-flex;
`

const PageItem = styled.li`
 ${({ disabled, theme }) => disabled && `
    button {
      background-color: transparent;
      color: ${theme.buttonDisabled};
      cursor: not-allowed;
      &:hover {
        background-color: transparent;
        color: ${theme.buttonDisabled};
      }
    }
  `}

  &:first-child button {
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    margin-left: 0;
  }
  &:last-child button {
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`

const PageLink = styled.button`
  border: 1px solid #dee2e6;
  display: block;
  font-weight: 700;
  line-height: 1.25;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  color: ${({ active, theme }) => active ? theme.textSecondary : theme.primary};
  background-color: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  position: relative;
  text-decoration: none;
  border-radius: 0;
  &:hover {
    color: ${({theme}) => theme.textSecondary};
  }
`

export { 
  PaginationList,
  PageItem,
  PageLink,
  PaginationContainer
} 
