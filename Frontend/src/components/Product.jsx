import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents navigation when clicking "Add to Cart"
    if (!product._id || !product.price) {
      console.error("Invalid product data:", product);
      return;
    }
    dispatch(
      addToCart({
        id: product._id, // Ensure _id is used
        name: product.name,
        price: product.price,
        image: product.image?.url || product.image,
        quantity: 1,
      })
    );
  };

  return (
    <div
      className="border rounded-lg p-4 shadow-lg cursor-pointer"
      onClick={() => navigate(`/product/${product._id}`)} // Ensure _id is used
    >
      <img
        src={product.image?.url || product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <div className="flex justify-between">
        <p className="text-gray-600 py-3">${product.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-2 bg-blue-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
