import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Icons from "../../assets/icons/Icons.js";

function CartSummary() {
    const items = useSelector((state) => state.cart.items);
    const { isAuthenticated } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const subtotal = items.reduce(
        (total, item) => total + Number(item.price) * item.quantity,
        0
    );

    const handleFinishOrder = () => {
        if (isAuthenticated) {
            navigate("/checkout");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/20">

            <div className="flex items-center gap-3 mb-7">

                <div className="w-10 h-10 rounded-xl bg-[#AC8941]/10 flex items-center justify-center">
                    <Icons.FaShoppingBag
                        className="text-[#AC8941]"
                        size={18}
                    />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-[#EDE7DA]">
                        Order Summary
                    </h2>

                    <p className="text-xs text-[#8C8577] mt-1">
                        Review your order
                    </p>
                </div>

            </div>

            <div className="space-y-4">

                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8577]">
                        Items
                    </span>

                    <span className="text-[#D8D2C4]">
                        {items.reduce(
                            (total, item) => total + item.quantity,
                            0
                        )}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8577]">
                        Subtotal
                    </span>

                    <span className="text-[#D8D2C4]">
                        ${subtotal.toFixed(2)}
                    </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8577]">
                        Delivery
                    </span>

                    <span className="text-green-400">
                        Free
                    </span>
                </div>

            </div>

            <div className="border-t border-[#AC8941]/15 my-6" />

            <div className="flex justify-between items-center">

                <span className="text-[#EDE7DA] font-semibold">
                    Total
                </span>

                <span className="text-[#AC8941] text-2xl font-bold">
                    ${subtotal.toFixed(2)}
                </span>

            </div>

            <button
                onClick={handleFinishOrder}
                className="mt-7 w-full bg-[#AC8941] hover:bg-[#c09a4d] text-black font-semibold py-3.5 rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98]"
            >
                Proceed to Checkout
            </button>

            <p className="text-center text-xs text-[#6B6558] mt-4">
                Secure checkout · Fast delivery
            </p>

        </div>
    );
}

export default CartSummary;