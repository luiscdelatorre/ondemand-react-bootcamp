import { device } from 'config'
import styled from 'styled-components'


const InputLabel = styled.label`
  font-weight: 700;
  padding: 0.5rem 1.5rem;
`

const InputContainer = styled.div`
  flex: 1 0 100%;
  padding: 1rem 1rem 2rem;
  position: relative;
  
  @media ${device.laptop} {
    flex-basis: 50%;
  }

  input {
    width: 100%;
    ${({theme, error}) => error && `
      border-color: ${theme.danger};
      display: inline-block;
    `}
  }
`

const InputError = styled.span`
  bottom: 0;
  color: ${({theme})=> theme.danger};
  display: inline-block;
  left: 1rem;
  padding: 0 1.5rem;
  position: absolute;
`

export {
  InputContainer,
  InputError,
  InputLabel,
} 
