import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout.jsx"
import AuthLayout from "../layouts/AuthLayout.jsx"
import Home from "../pages/Home.jsx"
import Login from "../pages/Login.jsx"
import Register from "../pages/Register.jsx"
import Cart from "../pages/Cart.jsx"
import Menu from "../pages/Menu.jsx"
import Checkout from "../pages/Checkout.jsx"
import Orders from "../pages/Orders.jsx";
import Admin from "../pages/Admin.jsx"
import About from "../pages/About.jsx"
import AdminRoute from "../routes/AdminRoutes.jsx";



function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />

            </Route>

            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/admin" element={<AdminRoute> <Admin /></AdminRoute>}/>
        </Routes>



    )
}

export default AppRoutes