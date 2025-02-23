
import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";

const Cart = ({ onClose }) => {
  const isCartEmpty = true; // Replace this with actual cart data
  const totalAmount = 0; // Replace with real total price

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Cart Content */}
      <div className="w-80 sm:w-96 bg-white h-full shadow-lg flex flex-col p-4 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
          <button className="text-2xl text-gray-600 hover:text-red-500" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-2">
          {!isCartEmpty ? (
            <>
              <div className="flex items-center gap-3 border-b py-3">
                <img src="https://via.placeholder.com/60" alt="Product" className="w-14 h-14 rounded-md" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Product Name</h4>
                  <p className="text-xs text-gray-500">₹ 999 x 2</p>
                </div>
                <button className="text-red-500 text-xl">×</button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <BsCartX className="text-6xl mb-2" />
              <p>Your cart is empty</p>
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {!isCartEmpty && (
          <div className="border-t pt-3">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>₹ {totalAmount}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md mt-3 hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
