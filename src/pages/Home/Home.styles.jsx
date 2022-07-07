import styled from 'styled-components'

const Container = styled.section`
  background-color: ${({theme}) => theme.background};
`

const Intro = styled.div`
  background-color: ${({theme}) => theme.primary};
  border-radius: 1rem;
  color: ${({theme}) => theme.textSecondary};
  margin: 0 2rem;
  padding: 2rem;
  text-align: justify;

  h2 {
    text-align: center;
  }

  p {
    font-size: 1.8rem;
    text-align: justify;
  }
`

export {
  Container,
  Intro
}
