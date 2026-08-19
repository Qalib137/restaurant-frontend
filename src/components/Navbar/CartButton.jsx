
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Icons from "../../assets/icons/Icons";

function CartButton() {
    const navigate = useNavigate();

    const items = useSelector((state) => state.cart.items);

    const cartCount = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <button
            onClick={() => navigate("/cart")}
            className="relative flex text-2xl items-center justify-center text-[#AC8941] border rounded-full w-10 h-10 hover:bg-[#d4af37] hover:text-black transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        >
            <Icons.ShoppingCart className="w-5 h-5" />

            {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                    {cartCount}
                </span>
            )}
        </button>
    );
}

export default CartButton;

