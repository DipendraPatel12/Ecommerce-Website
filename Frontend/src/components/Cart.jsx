import { AiOutlineClose } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/slices/cartSlice";
import CartItem from "./CarItem";

const Cart = ({ onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isCartEmpty = cartItems.length === 0;
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Background Overlay */}
      <div
        className="fixed inset-0  opacity-50 "
        onClick={onClose}
      ></div>

      {/* Cart Content */}
      <div className="w-80 sm:w-96 bg-white h-full shadow-lg flex flex-col p-4 transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
          <button
            className="text-2xl text-gray-600 cursor-pointer hover:text-red-500"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto mt-2">
          {!isCartEmpty ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
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
            <button
              className="w-full bg-black text-white py-2 cursor-pointer rounded-md mt-3 hover:bg-gray-800 transition"
              onClick={() => dispatch(clearCart())}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
