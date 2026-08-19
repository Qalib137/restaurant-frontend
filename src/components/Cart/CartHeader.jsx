import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PageHero from "../Common/PageHero.jsx";

function CartHeader({ itemCount = 0 }) {
  return (
    <>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[#8C8577] hover:text-[#AC8941] mb-6 transition-colors duration-200 text-sm"
      >
        <FaArrowLeft className="text-xs" />
        <span>Back to Home</span>
      </Link>

      <PageHero
        eyebrow="Review & Confirm"
        title="Shopping"
        highlight="Cart"
        description={
          itemCount > 0
            ? `You have ${itemCount} item${itemCount > 1 ? "s" : ""} ready for checkout.`
            : "Your selections will appear here."
        }
      />
    </>
  );
}

export default CartHeader;