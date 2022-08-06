import styled from 'styled-components'

const Container = styled.section`
  grid-area: form;
`

const Form = styled.form`
  border: 1px solid ${({theme}) => theme.borderColor};
  display: flex;
  flex-wrap: wrap;
`

const Subtitle = styled.h3`
  border-bottom: 1px solid ${({theme}) => theme.borderColor};
  flex: 1 0 100%;
  padding: 1rem 2.5rem;
`

export {
  Container,
  Form,
  Subtitle,
} 
