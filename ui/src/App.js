import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// components
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// pages
import Home from './pages/home/Home.jsx'
import Products from './pages/products/Products.jsx'
import Product from './pages/product/Product.jsx'

import './app.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>,
    children: [{
      path: '/',
      element: <Home />
    }, {
      path: '/products',
      element: <Products />
    }, {
      path: '/product/:id',
      element: <Product />
    }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
