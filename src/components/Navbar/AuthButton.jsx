import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <>
      <Link to="/login" className="px-4 py-2 rounded-full border border-[#AC8941] text-[#AC8941] bg-transparent transition-all duration-300 hover:bg-[#d4af37] hover:text-black">
        Login
      </Link>

      <Link to="/register" className="px-4 py-2 rounded-full border border-[#AC8941] text-[#AC8941] bg-transparent transition-all duration-300 hover:bg-[#d4af37] hover:text-black">
        Register
      </Link>
    </>
  );
}

export default AuthButtons;