import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import api from "../services/api";
import { clearCart } from "../Redux/features/cartSlice";
import PageHero from "../components/Common/PageHero.jsx";

function Checkout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const items = useSelector((state) => state.cart.items);

    const [loading, setLoading] = useState(false);

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (!isAuthenticated) {
        navigate("/login");
        return null;
    }

    const handlePlaceOrder = async () => {
        if (items.length === 0) {
            return;
        }

        try {
            setLoading(true);

            const orderItems = items.map((item) => ({
                foodId: item.id,
                quantity: item.quantity,
            }));

            const response = await api.post("/api/orders", {
                items: orderItems,
            });

            console.log("Order created:", response.data);

            dispatch(clearCart());

            navigate("/orders");
        } catch (error) {
            console.log(
                error.response?.data?.message ||
                "Order could not be created"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#141F1B] pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="max-w-5xl mx-auto">

                <button
                    onClick={() => navigate("/cart")}
                    className="inline-flex items-center gap-2 text-[#8C8577] hover:text-[#AC8941] mb-6 transition-colors duration-200 text-sm cursor-pointer"
                >
                    <FaArrowLeft className="text-xs" />
                    <span>Back to Cart</span>
                </button>

                <PageHero
                    eyebrow="Almost There"
                    title="Checkout"
                    highlight=""
                    description={`Complete your order, ${user?.name || "guest"}.`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                    <div className="bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/20">
                        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#EDE7DA] mb-6">
                            Your Order
                        </h2>

                        <div className="space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center border-b border-[#AC8941]/10 pb-4"
                                >
                                    <div>
                                        <h3 className="font-semibold text-[#EDE7DA]">
                                            {item.name}
                                        </h3>

                                        <p className="text-sm text-[#8C8577]">
                                            Qty: {item.quantity}
                                        </p>
                                    </div>

                                    <span className="font-semibold text-[#AC8941]">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-[#AC8941]/15 mt-6 pt-5 flex justify-between items-center">
                            <span className="text-[#EDE7DA] font-semibold">Total</span>

                            <span className="text-[#AC8941] text-2xl font-bold">
                                ${subtotal.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <div className="bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl p-5 sm:p-6 shadow-xl shadow-black/20 h-fit">
                        <h2 className="text-xl sm:text-2xl font-serif font-semibold text-[#EDE7DA] mb-6">
                            Order Information
                        </h2>

                        <div className="space-y-4">

                            <div>
                                <label className="block text-sm font-medium text-[#8C8577] mb-1.5">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={user?.name || ""}
                                    readOnly
                                    className="w-full border border-[#AC8941]/15 rounded-xl px-4 py-3 bg-[#141F1B] text-[#EDE7DA]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#8C8577] mb-1.5">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={user?.email || ""}
                                    readOnly
                                    className="w-full border border-[#AC8941]/15 rounded-xl px-4 py-3 bg-[#141F1B] text-[#EDE7DA]"
                                />
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={loading || items.length === 0}
                                className="w-full mt-4 bg-[#AC8941] hover:bg-[#c09a4d] text-black font-semibold py-3.5 rounded-xl transition-all duration-300 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading
                                    ? "Placing Order..."
                                    : "Place Order"}
                            </button>

                            <p className="text-center text-xs text-[#6B6558] mt-1">
                                Secure checkout · Fast delivery
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Checkout;