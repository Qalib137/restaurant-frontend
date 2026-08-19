import Icons from "../../assets/icons/Icons.js";

function UserDropdown({ user, userMenuOpen, setUserMenuOpen, onLogout }) {
  return (
    <div className="relative">
      <button
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        className="w-10 h-10 flex items-center justify-center border border-[#AC8941] rounded-full text-[#AC8941] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95 cursor-pointer"
      >
        <Icons.FaUser />
      </button>

      {userMenuOpen && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-lg py-2 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <button
            onClick={onLogout}
            className="w-full px-4 py-2 text-left text-sm text-[#AC8941] hover:bg-[#AC8941] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;