import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/slices/authSlice";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  // Get auth state from Redux
  const { user, token } = useSelector((state) => state.auth);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total quantity in cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black shadow-md px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div
          className="text-xl bg-white px-3 py-2 rounded font-bold text-gray-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          PosterZ
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {token ? (
            <button
              className="flex items-center gap-1 px-3 py-2 bg-white rounded text-gray-700 hover:text-black cursor-pointer"
              onClick={handleLogout}
            >
              <FaUser size={20} />
              <span className="hidden md:inline">Logout</span>
            </button>
          ) : (
            <button
              className="flex items-center gap-1 px-3 py-2 bg-white rounded text-gray-700 hover:text-black cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <FaUser size={20} />
              <span className="hidden md:inline">Login</span>
            </button>
          )}
          {user?.isAdmin && (
            <button
              className="px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer"
              onClick={() => navigate("/admin/dashboard")}
            >
              Admin Dashboard
            </button>
          )}
          <button
            className="relative bg-white rounded px-2 py-2 text-gray-700 hover:text-black cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart size={22} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-4">
          {token ? (
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded hover:text-black"
              onClick={() => {
                handleLogout();
                setMenuOpen(false); // Close menu after logout
              }}
            >
              <FaUser size={20} />
              Logout
            </button>
          ) : (
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded hover:text-black"
              onClick={() => {
                navigate("/login");
                setMenuOpen(false); // Close menu after login
              }}
            >
              <FaUser size={20} />
              Login
            </button>
          )}
          {user?.isAdmin && (
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              onClick={() => {
                navigate("/admin/dashboard");
                setMenuOpen(false); // Close menu after navigation
              }}
            >
              Admin Dashboard
            </button>
          )}
          <button
            className="relative bg-white rounded px-4 py-2 text-gray-700 hover:text-black"
            onClick={() => {
              setIsCartOpen(true);
              setMenuOpen(false); // Close menu after opening cart
            }}
          >
            <FaShoppingCart size={22} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Show Cart Component if `isCartOpen` is true */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
