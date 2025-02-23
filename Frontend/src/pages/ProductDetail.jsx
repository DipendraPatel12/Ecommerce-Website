import { useParams } from "react-router-dom";
import Herojpg from "../assets/Hero.jpg";
const ProductDetail = () => {
  const { productId } = useParams();

  // Dummy product data (Replace this with API call)
  const product = {
    id: productId,
    title: "Stylish T-Shirt",
    price: "499",
    image: Herojpg,
    description: "This is a high-quality stylish t-shirt.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt="Product"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 font-semibold">
            ₹ {product.price}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
