import styled from 'styled-components'

const FooterContainer = styled.footer`
  align-items: center;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.borderColor};
  display: flex;
  grid-area: footer;
  justify-content: center;
  padding: 0.5rem;

  p {
    margin: 0;
  }
`

export { FooterContainer }
