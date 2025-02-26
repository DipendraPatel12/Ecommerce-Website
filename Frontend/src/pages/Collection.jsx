import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/slices/productSlice";
import Product from "../components/Product";

const Collection = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log("Products Data:", products); // Debugging

  // Define categories
  const categories = ["All", "Movies", "Spiritual", "Cartoon"];

  // Ensure filtering works properly
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Ensure sorting works properly
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "high-to-low") {
      return b.price - a.price;
    } else if (sortOption === "newest") {
      return new Date(b.createdAt || "2024-01-01") - new Date(a.createdAt || "2024-01-01");
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-semibold">Explore Our Collection</h2>
          <p className="text-gray-600 mt-2">
            Discover high-quality posters & art prints at the best prices.
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
        {/* Category Filter */}
        <div className="flex space-x-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-lg transition ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sorting Filter */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="newest">Newest First</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Collection;
