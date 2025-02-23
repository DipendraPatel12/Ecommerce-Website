import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Image Section */}
      <div className="w-20 h-20 bg-gray-200 rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/80"
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">Product Name</p>
        <p className="text-sm text-gray-600">₹ 999</p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mt-2">
          <button className="w-8 h-8 flex justify-center items-center bg-gray-300 rounded-md text-lg font-bold hover:bg-gray-400 transition">
            −
          </button>
          <span className="text-lg font-semibold">1</span>
          <button className="w-8 h-8 flex justify-center items-center bg-gray-300 rounded-md text-lg font-bold hover:bg-gray-400 transition">
            +
          </button>
        </div>

        {/* Subtotal */}
        <p className="mt-1 text-sm text-gray-700 font-medium">
          Subtotal: ₹ 999
        </p>
      </div>

      {/* Remove Button */}
      <button className="text-gray-500 hover:text-red-500 transition">
        <AiOutlineClose size={18} />
      </button>
    </div>
  );
};

export default CartItem;
