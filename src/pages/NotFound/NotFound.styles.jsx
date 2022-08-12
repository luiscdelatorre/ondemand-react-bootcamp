import styled from 'styled-components'

const Container = styled.section`
  background-color: ${({theme}) => theme.background};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button {
    margin: 3rem;
    width: fit-content;
  }
`

const Title = styled.h2`
  margin: 3rem 3rem 0;
`

const Subtitle = styled.h3`
  margin: 0 3rem 3rem;
`

export {
  Container,
  Title,
  Subtitle
}
