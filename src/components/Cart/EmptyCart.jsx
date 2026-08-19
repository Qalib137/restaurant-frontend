import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons.js";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-[#1B2925] border border-[#AC8941]/10 rounded-2xl shadow-2xl text-center px-4">
      <div className="w-24 h-24 rounded-full bg-[#AC8941]/10 flex items-center justify-center text-[#AC8941] mb-6">
        <Icons.FaShoppingBag className="text-4xl" />
      </div>

      <h2 className="text-2xl font-semibold mb-2 text-[#EDE7DA]">Your cart is empty</h2>
      <p className="text-[#8C8577] max-w-md mb-8">
        Looks like you haven't added anything to your cart yet. Explore our menu and discover delicious meals.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="border border-[#AC8941] text-[#AC8941] hover:bg-[#AC8941] hover:text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Back to Home
        </Link>
        <Link
          to="/Menu"
          className="bg-[#AC8941] hover:bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#AC8941]/20"
        >
          Explore Menu
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;