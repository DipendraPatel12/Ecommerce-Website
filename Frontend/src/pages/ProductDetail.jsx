import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/slices/cartSlice";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((p) => p._id === productId)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image?.url}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-xl text-gray-700 font-semibold mt-2">
              ₹ {product.price}
            </p>
            <p className="text-md text-gray-600 leading-relaxed mt-3">
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg mt-6 hover:bg-blue-700 transition duration-300"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
