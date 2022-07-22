import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from 'layout/MainLayout/MainLayout'
import {
 Home,
 Products,
 NoMatch,
 Product, 
 Search
} from 'pages'
import { Provider } from 'react-redux'
import store from '../store/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App 
