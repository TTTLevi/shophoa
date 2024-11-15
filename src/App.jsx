import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { PublicLayout } from "./components/layouts"
import HoaChau from "./pages/HoaChau"
import HoaChucMung from "./pages/HoaChucMung"
import HoaChiaBuon from "./pages/HoaChiaBuon"
import CayXanh from "./pages/CayXanh"
import HoaTang from "./pages/HoaTang"
import ProductDetail from "./pages/ProductDetail"
function App() {

  return (
    <Router>
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer /> */}
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/hoa-chau-thiet-ke" element={<HoaChau />}></Route>
          <Route path="/hoa-chuc-mung" element={<HoaChucMung />}></Route>
          <Route path="/hoa-chia-buon" element={<HoaChiaBuon />}></Route>
          <Route path="/cay-xanh" element={<CayXanh />}></Route>
          <Route path="/hoa-tang-hoa-dich-vu" element={<HoaTang />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
