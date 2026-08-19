import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Icons from "../../assets/icons/Icons.js";
import AuthButtons from "./AuthButton.jsx";
import CartButton from "./CartButton.jsx";
import UserDropdown from "./UserDropdown.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { logout } from "../../Redux/features/authSlice";

function Navbar({ simple = false }) {
    const [open, setOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const location = useLocation();

    const { user, isAuthenticated } = useSelector(
        (state) => state.auth
    );

    const dispatch = useDispatch();

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        dispatch(logout());
        setUserMenuOpen(false);
        setOpen(false);
    };

    const handleHomeClick = () => {
        setOpen(false);

        setTimeout(() => {
            window.scrollTo({
                top: 900,
                behavior: "smooth",
            });
        }, 100);
    };

    const navLinkStyle =
        "transition-all duration-1000 border-b-2 pb-2 border-transparent hover:scale-110 hover:border-[#AC8941]";

    return (
        <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-14 py-6">

            <div className="flex items-center justify-between">

                <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-white text-2xl font-bold"
                >
                    <Icons.FaPizzaSlice className="text-3xl" />
                    RestoApp
                </Link>

                <div className="flex items-center gap-6">

                    {!simple && (
                        <ul className="items-center gap-14 text-lg text-white font-medium hidden lg:flex">

                            <li>
                                <Link
                                    to="/"
                                    onClick={handleHomeClick}
                                    className={navLinkStyle}
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/menu"
                                    className={navLinkStyle}
                                >
                                    Menu
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className={navLinkStyle}
                                >
                                    About
                                </Link>
                            </li>

                            {isAuthenticated && user?.role === "admin" && (
                                <li>
                                    <Link
                                        to="/admin"
                                        className="text-white hover:text-[#AC8941] transition-colors font-medium"
                                    >
                                        Admin
                                    </Link>
                                </li>
                            )}

                        </ul>
                    )}

                    <div className="hidden lg:flex items-center gap-3">

                        {isAuthenticated ? (
                            <UserDropdown
                                user={user}
                                userMenuOpen={userMenuOpen}
                                setUserMenuOpen={setUserMenuOpen}
                                onLogout={handleLogout}
                            />
                        ) : (
                            <AuthButtons />
                        )}

                        <CartButton />

                    </div>

                    <div className="flex lg:hidden items-center gap-3">

                        {isAuthenticated && (
                            <UserDropdown
                                user={user}
                                userMenuOpen={userMenuOpen}
                                setUserMenuOpen={setUserMenuOpen}
                                onLogout={handleLogout}
                            />
                        )}

                        <CartButton />

                        <button
                            type="button"
                            className="text-white cursor-pointer relative z-50"
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            {!open ? (
                                <Icons.FaBars className="text-2xl" />
                            ) : (
                                <Icons.FaTimes className="text-3xl text-[#AC8941]" />
                            )}
                        </button>

                    </div>

                </div>

            </div>

            {open && (
                <MobileMenu
                    isAuthenticated={isAuthenticated}
                    user={user}
                    onLogout={handleLogout}
                    onClose={() => setOpen(false)}
                />
            )}

        </nav>
    );
}

export default Navbar;