import { createGlobalStyle } from 'styled-components'
import { device } from 'config'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  font-size: 10px;
  line-height: 1.1;
  font-weight: 400;
  height: 100%;
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Dosis', sans-serif;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
}

#root {
  height: 100%;
}

p,
a,
span,
label,
input, button {
  font-size: 1.4rem;
  line-height: 1.2;
}

small {
  font-size: 1rem;
}

p {
  margin: 0 0 1rem 0;
}

a {
  color: ${({ theme }) => theme.link};
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0 0 0.1rem -0.05rem ${({ theme }) => theme.link};
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${({ theme }) => theme.fontTitle};
  font-weight: 400;
  margin: 0.5rem 0;
  letter-spacing: 2px;
}

h1 {
  font-size: 7.2rem;
}
h2 {
  font-size: 3.8rem;
  @media ${device.laptop} {  
    font-size: 5.2rem;
  } 
}
h3 {
  font-size: 2.4rem;
  @media ${device.laptop} {  
    font-size: 2.8rem;
  } 
}
h4 {
  font-size: 2rem;
}
h5 {
  font-size: 1.8rem;
}
h6 {
  font-size: 1.6rem;
}

ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

button {
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  border: none;
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1.5rem 3rem;
  text-decoration: none;
  font-family: 'Dosis', sans-serif;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
    transition: ${({ theme }) => theme.transition};
  }

  &[disabled] {
    width: 100%;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.disabled};
    color: ${({ theme }) => theme.text};
  }
}

hr {
  border: 0;
  height: 1px;
  background-color: ${({ theme }) => theme.borderColor};
  margin: 1.5rem 0;
}

img{
  display: inline-block;
  vertical-align: top;
  max-width: 100%;
}

input, textarea {
  border-radius: 2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.6rem;
  border: 1px solid ${({ theme }) => theme.borderColor };

  &:focus {
    border-color: ${({ theme }) => theme.primary}; 
    outline: none;
  }
}

label {
  font-size: 1.6rem;
  display: block;
}

input {
  height: 38px;
  padding: 0 1.5rem;
}

textarea {
  resize: none;
  padding: 1.5rem;
}

.container {
  margin: 0 auto;
  width: 100%;

  @media ${device.phoneLg} {  
    max-width: 540px;
  }

  @media ${device.tablet} {  
    max-width: 720px;
  }

  @media ${device.laptop} {  
    max-width: 960px;
  }  

  @media ${device.desktop} {  
    max-width: 1140px;
  }  

  @media ${device.desktopLg} {  
    max-width: 1320px;
  }  
}

.section-title {
  display: inline-block;
  line-height: 1;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.primary};
    bottom: 0;
    content: '';
    height: 0.4rem;
    left: 0;
    position: absolute;
    width: 2rem;
  }
}

/**
* Loader Animations
*/
@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  25% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 2px;
  }
  50% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 -2px,  -14px 0 0 2px,  -38px 0 0 -2px;
  }
  75% {
    box-shadow: 14px 0 0 2px,  38px 0 0 -2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
  100% {
    box-shadow: 14px 0 0 -2px,  38px 0 0 2px,  -14px 0 0 -2px,  -38px 0 0 -2px;
  }
}
`

export default GlobalStyles
