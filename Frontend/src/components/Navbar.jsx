import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-black shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo Section */}
      <div
        className="text-xl bg-white px-3 py-2 rounded font-bold text-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        MyShop
      </div>

      {/* Icons Section */}
      <div className="flex items-center gap-14">
        <button
          className="flex items-center gap-1 px-3 py-2 bg-white rounded text-gray-700 hover:text-black"
          onClick={() => navigate("/login")}
        >
          <FaUser size={20} />
          <span className="hidden md:inline">Login</span>
        </button>

        <button className="relative bg-white rounded px-2 py-2 text-gray-700 hover:text-black">
          <FaShoppingCart size={22} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
