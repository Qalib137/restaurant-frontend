import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons.js";
import mbg from "../../assets/images/MobileMenu.png";

function MobileMenu({ isAuthenticated, user, onLogout, onClose }) {
    const isAdmin = user?.role === "admin";

    const handleLinkClick = () => {
        onClose();
    };

    const handleLogout = () => {
        onLogout();
        onClose();
    };

    return (
        <ul
            className="absolute text-2xl min-h-screen flex flex-col w-screen items-center justify-center text-white text-center font-medium gap-8 top-0 left-0 z-40"
            style={{
                background: `url(${mbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <li className="flex items-center justify-center gap-2">
                <Icons.FaPizzaSlice className="text-xl" />

                <Link
                    to="/"
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
            </li>

            <li className="flex items-center justify-center gap-2">
                <Icons.FaUtensils className="text-xl" />

                <Link
                    to="/menu"
                    onClick={handleLinkClick}
                >
                    Menu
                </Link>
            </li>

            <li className="flex items-center justify-center gap-2">
                <Icons.FaInfoCircle className="text-xl" />

                <Link
                    to="/about"
                    onClick={handleLinkClick}
                >
                    About
                </Link>
            </li>

            {isAuthenticated && isAdmin && (
                <li className="flex items-center justify-center gap-2">
                    <Icons.FaUserShield className="text-xl text-[#AC8941]" />

                    <Link
                        to="/admin"
                        onClick={handleLinkClick}
                        className="text-[#AC8941] hover:text-[#D4AF37] transition-colors"
                    >
                        Admin Panel
                    </Link>
                </li>
            )}

            <hr className="w-1/2 border-gray-500 my-2" />

            {isAuthenticated ? (
                <li className="flex flex-col items-center gap-3">

                    <div className="flex items-center gap-2 text-lg text-[#AC8941]">
                        <Icons.FaUser />

                        <span>{user?.name}</span>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="text-base bg-[#AC8941] text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer"
                    >
                        Logout
                    </button>

                </li>
            ) : (
                <li className="flex flex-col gap-4 w-48">

                    <Link
                        to="/login"
                        onClick={handleLinkClick}
                        className="text-center text-lg border border-[#AC8941] text-[#AC8941] py-2 rounded-lg hover:bg-[#AC8941] hover:text-white transition-colors"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        onClick={handleLinkClick}
                        className="text-center text-lg bg-[#AC8941] text-white py-2 rounded-lg hover:bg-[#D4AF37] transition-colors"
                    >
                        Register
                    </Link>

                </li>
            )}
        </ul>
    );
}

export default MobileMenu;