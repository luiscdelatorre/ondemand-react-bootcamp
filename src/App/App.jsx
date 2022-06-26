import React, { useState } from 'react'
import MainLayout from 'layout/MainLayout/MainLayout'
import { Home, Products } from 'pages'

const App = () => {
  const [activePage, setActivePage] = useState( 'home' )

  const navigate = ( page ) => {
    setActivePage( page )
  }
  
  const isHomePage = activePage === 'home'

  return (
    <MainLayout navigate={( page ) => navigate( page )}>
      {isHomePage
        ? <Home navigate={( page ) => navigate( page )} />
        : <Products />
      }
    </MainLayout>
  )
}

export default App 
