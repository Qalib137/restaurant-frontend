import { useDispatch } from "react-redux";
import Icons from "../../assets/icons/Icons.js";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "../../Redux/features/cartSlice";

function CartItem({ items }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="group bg-[#1B2925] border border-[#AC8941]/15 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:border-[#AC8941]/40"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
                        <div className="flex items-center gap-4 min-w-0 flex-1">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-[#20302B]">
                                <img
                                    src={
                                        item.image?.startsWith("http")
                                            ? item.image
                                            : `https://restaurant-backend-35x5.onrender.com${item.image}`
                                    }
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="min-w-0">
                                <h3 className="text-[#EDE7DA] font-semibold text-base sm:text-lg truncate">
                                    {item.name}
                                </h3>

                                <p className="text-[#8C8577] text-sm mt-1">
                                    ${Number(item.price).toFixed(2)} each
                                </p>

                                <p className="text-[#AC8941] font-semibold mt-2">
                                    $
                                    {(
                                        Number(item.price) *
                                        item.quantity
                                    ).toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-4">
                            <div className="flex items-center bg-[#141F1B] border border-[#AC8941]/15 rounded-xl p-1">
                                <button
                                    onClick={() =>
                                        dispatch(decreaseQuantity(item.id))
                                    }
                                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg text-[#8C8577] hover:text-[#EDE7DA] hover:bg-[#20302B] transition cursor-pointer"
                                >
                                    −
                                </button>

                                <span className="w-8 sm:w-10 text-center text-[#EDE7DA] font-medium">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() =>
                                        dispatch(increaseQuantity(item.id))
                                    }
                                    className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg text-[#8C8577] hover:text-[#EDE7DA] hover:bg-[#20302B] transition cursor-pointer"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 transition cursor-pointer"
                            >
                                <Icons.FaTrash size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CartItem;