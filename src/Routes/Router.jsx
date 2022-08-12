import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from 'layout/MainLayout/MainLayout'
import {
 Home,
 Products,
 NotFound,
 Product, 
 Search,
 Cart,
 Checkout
} from 'pages'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:productId" element={<Product />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default AppRouter
