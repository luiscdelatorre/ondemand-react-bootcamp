import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Header, Footer } from 'layout'
import { theme } from 'config'
import { ContainerStyled, MainContentStyled } from './MainLayout.styles'
import GlobalStyles from 'Global.styles'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <ContainerStyled>
        <Header/>
        <MainContentStyled><Outlet /></MainContentStyled>
        <Footer />
      </ContainerStyled>
    </ThemeProvider>
  )
}

export default MainLayout
