import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../Redux/slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img
          src={item.image || item.image?.url}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={handleQuantityChange}
            className="w-16 border p-1 text-center"
          />
        </div>
      </div>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
