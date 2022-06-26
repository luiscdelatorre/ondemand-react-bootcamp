import styled from 'styled-components'

const SearchStyled = styled.div`
  align-items: center;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  position: relative;
`

const SearchButtonStyled = styled.button`
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

  &:hover {
    background-color: ${(props) => props.theme.borderColor};
  }
`

export {
  SearchStyled,
  SearchButtonStyled
}
