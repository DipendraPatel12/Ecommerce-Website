import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/slices/productSlice";

const UploadProduct = ({ setShowUpload }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      setImagePreview(URL.createObjectURL(file)); // Show preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image); // ✅ Ensure `image` is added

    console.log("Submitting form:", formData); // Debugging

    await dispatch(addProduct(formData));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="block w-full mb-2 p-2 border"
        />
        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="block w-full mb-2 p-2 border"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="block w-full mb-2 p-2 border"
        />
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          className="block w-full mb-2 p-2 border"
        />

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full mb-2 p-2 border"
        />

        {/* Image Preview */}
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-32 object-cover mb-2"
          />
        )}

        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
