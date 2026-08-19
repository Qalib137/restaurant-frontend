
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import bg from "../assets/images/Background.png";
import Footer from "../components/Footer/Footer";

export default function MainLayout() {
    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <div
            className="bg-contain bg-center "
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Navbar simple={!isHome} />
            <Outlet />
            <Footer />
        </div>
    );
}

