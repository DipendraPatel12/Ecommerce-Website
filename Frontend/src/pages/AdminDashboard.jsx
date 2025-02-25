import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/slices/productSlice";
import UploadProduct from "../components/UploadProduct";

const AdminDashboard = () => {
  const [showUpload, setShowUpload] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-gray-800 text-white p-4 flex md:block">
        <button
          onClick={() => setShowUpload(true)}
          className="bg-blue-500 px-4 py-2 rounded-md w-full"
        >
          Upload Product
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-3/4 p-4">
        {showUpload ? (
          <UploadProduct setShowUpload={setShowUpload} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product._id || product.id || Math.random()} // ✅ Ensure a unique key
                className="border p-4 rounded shadow"
              >
                <img
                  src={product.image?.url || "/placeholder.jpg"} // ✅ Default placeholder if image is missing
                  alt={product.name || "Product"}
                  className="w-full h-32 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-semibold">${product.price}</p>
                <p className="text-xs text-gray-500">
                  Category: {product.category || "Uncategorized"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
