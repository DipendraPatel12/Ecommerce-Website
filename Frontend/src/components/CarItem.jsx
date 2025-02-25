import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Image Section */}
      <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{item.title}</p>
        <p className="text-sm text-gray-600">₹ {item.price}</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mt-2">
          <button
            className="w-8 h-8 flex justify-center items-center bg-gray-300 rounded-md text-lg font-bold hover:bg-gray-400 transition"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
          >
            −
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            className="w-8 h-8 flex justify-center items-center bg-gray-300 rounded-md text-lg font-bold hover:bg-gray-400 transition"
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
          >
            +
          </button>
        </div>

        {/* Subtotal */}
        <p className="mt-1 text-sm text-gray-700 font-medium">
          Subtotal: ₹ {item.price * item.quantity}
        </p>
      </div>

      {/* Remove Button */}
      <button
        className="text-gray-500 hover:text-red-500 transition"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        <AiOutlineClose size={18} />
      </button>
    </div>
  );
};

export default CartItem;
