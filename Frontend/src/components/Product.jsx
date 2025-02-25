import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Dummy product data
  const product = {
    id: "1",
    title: "Stylish T-Shirt",
    price: "499",
    image: "https://via.placeholder.com/300",
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transition-transform hover:scale-105"
      onClick={() => navigate(`/products/${product.id}`)} // Navigates to ProductDetail
    >
      <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      <div className="mt-3 text-center">
        <p className="text-lg font-semibold">{product.title}</p>
      </div>

      <div className="flex justify-between items-center mt-3">
        <p className="text-red-500 font-bold text-md">₹ {product.price}</p>
        <button
          className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            dispatch(handleAddToCart(product));
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
