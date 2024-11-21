import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { PublicLayout, AdminLayout } from "./components/layouts"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import CategoryPage from "./pages/CategoryPage"
import Checkout from "./pages/Checkout"
import Order from "./pages/Order"
import FilterData from "./pages/FilterData"
import About from "./pages/About"
import Address from "./pages/Address"
import OverviewPage from "./pages/admin/OverviewPage"
import ProductsPage from "./pages/admin/ProductsPage"

function App() {
  const [order, setOrder] = useState(null)

  return (
    <Router>

      <ToastContainer />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
          <Route path="/order-confirmation" element={<Order order={order} />}></Route>
          <Route path="/search-result" element={<FilterData />}></Route>
          <Route path="/gioi-thieu" element={<About />}></Route>
          <Route path="/shop-flower" element={<Address />}></Route>
        </Route>
        {/* admin */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin" element={<OverviewPage/>} />
          <Route path="/admin/san-pham" element={<ProductsPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
