import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/features/cartSlice";
import Icons from "../../assets/icons/Icons";

function MenuCard({ food }) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(food));
        setAdded(true);

        setTimeout(() => {
            setAdded(false);
        }, 1000);
    };

    return (
        <div className="group relative bg-linear-to-b from-zinc-900/80 to-zinc-950/90 border border-zinc-800/80 hover:border-amber-600/60 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-600/10 flex flex-col justify-between backdrop-blur-xl">

            <div className="absolute inset-0 bg-linear-to-tr from-amber-600/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={`http://localhost:4000${food.image}`}
                        alt={food.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-transparent to-transparent opacity-90" />

                    {food.isChefSpecial && (
                        <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md border border-amber-600/50 text-amber-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                            ★ Chef Special
                        </div>
                    )}

                    <span className="absolute bottom-4 right-4 bg-zinc-950/90 backdrop-blur-md text-amber-600 font-serif font-bold text-lg px-4 py-1.5 rounded-xl border border-amber-600/40 shadow-xl">
                        ${Number(food.price).toFixed(2)}
                    </span>
                </div>

                <div className="p-6 relative z-10">
                    {food.category && (
                        <span className="text-xs font-semibold text-amber-600 uppercase tracking-widest block mb-1">
                            {food.category}
                        </span>
                    )}

                    <h3 className="text-xl font-serif text-white group-hover:text-amber-600 transition-colors duration-300">
                        {food.name}
                    </h3>

                    <p className="mt-2 text-zinc-400 text-xs leading-relaxed line-clamp-2">
                        {food.description}
                    </p>
                </div>
            </div>

            <div className="px-6 pb-6 pt-2 relative z-10">
                <button
                    onClick={handleAddToCart}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2 border ${
                        added
                            ? "bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-900/40"
                            : "bg-zinc-800/60 hover:bg-amber-600 text-zinc-200 hover:text-zinc-950 border-zinc-700/50 hover:border-amber-600 shadow-md"
                    }`}
                >
                    {added ? (
                        <>
                            <span className="text-sm">✓</span>
                            Added
                        </>
                    ) : (
                        <>
                            <Icons.ShoppingCart className="w-4 h-4" />
                            Add to Cart
                        </>
                    )}
                </button>
            </div>

        </div>
    );
}

export default MenuCard;