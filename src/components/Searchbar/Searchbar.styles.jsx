import styled from 'styled-components'

const SearchButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  font-size: 2.5rem;
  height: 38px;
  justify-content: center;
  padding: 0;
  width: 38px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    background-color: transparent;
    color: ${({theme}) => theme.primary};
  }
`
const SearchInput = styled.input`
  align-items: center;
  background-color: transparent;
  border-radius: 2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.6rem;
  height: 38px;
  justify-content: center;
  padding: 0 3.5rem 0 1.5rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    ~ button {
      color: ${({theme}) => theme.primary};
    } 
  }
`

const SearchForm = styled.form`
  position: relative;
`

const SearchbarContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: flex-end;
  position: relative;
  flex: 1;
  margin-left: 1rem;
`

export {
  SearchbarContainer,
  SearchButton,
  SearchInput,
  SearchForm
}
