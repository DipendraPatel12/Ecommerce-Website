import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import Redux hooks
import { logout } from "../redux/slices/authSlice"; // Import logout action
import Cart from "./Cart"; // Import Cart Component

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Get auth state from Redux
  const { user, token } = useSelector((state) => state.auth);

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total quantity in cart
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Logout handler
  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login page
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

        {/* Icons Section */}
        <div className="flex items-center gap-14">
          {/* Login/Logout Button */}
          {token ? (
            <button
              className="flex items-center gap-1 px-3 py-2 bg-white rounded text-gray-700 hover:text-black cursor-pointer"
              onClick={handleLogout} // Call logout function
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
              className="flex items-center gap-1 px-3 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer"
              onClick={() => navigate("/admin/dashboard")}
            >
              Admin Dashboard
            </button>
          )}

          {/* Cart Button */}
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

      {/* Show Cart Component if `isCartOpen` is true */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  );
};

export default Navbar;
