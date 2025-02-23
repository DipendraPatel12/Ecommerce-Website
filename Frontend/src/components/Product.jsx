import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

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
          className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking "Add to Cart"
            console.log("Added to cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
