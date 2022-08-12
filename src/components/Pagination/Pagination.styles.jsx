import styled from 'styled-components'

const PaginationContainer = styled.nav`
  text-align: center;
`

const PaginationList = styled.ul`
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

  svg {
      margin: 0;
      vertical-align: text-bottom;
      height: 2.4rem;
  }

  &:first-child button {
    border-bottom-left-radius: ${({ theme }) => theme.borderRadiusMd};
    border-top-left-radius: ${({ theme }) => theme.borderRadiusMd};
    margin-left: 0;
  }
  &:last-child button {
    border-bottom-right-radius: ${({ theme }) => theme.borderRadiusMd};
    border-top-right-radius: ${({ theme }) => theme.borderRadiusMd};
  }
`

const PageLink = styled.button`
  border: 1px solid #dee2e6;
  display: block;
  font-weight: 700;
  line-height: 1.25;
  margin-left: -1px;
  padding: 0.5rem 0.75rem;
  color: ${({ active, theme }) => active ? theme.white : theme.primary};
  background-color: ${({ active, theme }) => active ? theme.primary : 'transparent'};
  position: relative;
  text-decoration: none;
  border-radius: 0;
  &:hover {
    color: ${({theme}) => theme.white};
  }
`

export { 
  PaginationList,
  PageItem,
  PageLink,
  PaginationContainer
} 
