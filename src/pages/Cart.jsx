import { useSelector } from "react-redux";
import CartHeader from "../components/Cart/CartHeader.jsx";
import EmptyCart from "../components/Cart/EmptyCart.jsx";
import CartSummary from "../components/Cart/CartSummary.jsx";
import CartItem from "../components/Cart/CartItem.jsx";

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const totalQty = cartItems.reduce((t, i) => t + i.quantity, 0);

    return (
        <section className="min-h-screen bg-[#141F1B] pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-10 lg:px-14">
            <div className="max-w-7xl mx-auto">

                <CartHeader itemCount={totalQty} />

                {cartItems.length === 0 ? (
                    <div className="flex items-center justify-center py-16 sm:py-24">
                        <EmptyCart />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10">
                        <div className="min-w-0">
                            <CartItem items={cartItems} />
                        </div>
                        <div className="lg:sticky lg:top-28 h-fit">
                            <CartSummary />
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Cart;