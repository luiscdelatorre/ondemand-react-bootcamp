import styled from 'styled-components'

const FilterButton = styled.button`
  background-color: ${({ theme }) => theme.filter};
  color: ${({ theme }) => theme.text};
  font-size: 1.6rem;
  font-weight: 400;
  margin: 1rem 1rem 0 0;
  padding: 0.5rem 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.filterHover};
  }
  
  ${({ active, theme }) => active && `
    background-color: ${theme.primary};
    color: ${theme.textSecondary};

     &:hover {
      background-color: ${theme.primaryDark};
    }
  `}
`
export { FilterButton } 
