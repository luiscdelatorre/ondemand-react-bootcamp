import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, Footer } from 'layout'
import { theme } from 'config'
import { ContainerStyled, MainContentStyled } from './MainLayout.styles'
import GlobalStyles from 'Global.styles'

const MainLayout = ({ children, navigate }) => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <ContainerStyled>
        <Header navigate={(page) => navigate(page)}/>
        <MainContentStyled>{children}</MainContentStyled>
        <Footer />
      </ContainerStyled>
    </ThemeProvider>
  )
}

export default MainLayout
