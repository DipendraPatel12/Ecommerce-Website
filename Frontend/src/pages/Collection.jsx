import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "../components/Product";

const Collection = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const [sortBy, setSortBy] = useState("price");

  const sortOptions = [
    { value: "Price - Low To High", sort: "price" },
    { value: "Newest First", sort: "createdAt" },
  ];

  function updateCategory(e) {
    navigate(`/category/${e.target.value}`);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-semibold">Explore Our Collection</h2>
          <p className="text-gray-600 mt-2">
            Discover high-quality posters & art prints at the best prices.
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <label className="mr-2 font-medium">Sort By:</label>
          <select
            className="border p-2 rounded-md"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((item) => (
              <option key={item.sort} value={item.sort}>
                {item.value}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Filter Sidebar */}
        <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-medium mb-3">Categories</h3>
          <div className="mb-2">
            <input
              type="radio"
              id="movies-poster"
              value="Movies-Poster"
              checked={categoryId === "Movies poster"}
              onChange={updateCategory}
              className="mr-2"
            />
            <label htmlFor="category1" className="cursor-pointer">
              Movies Poster
            </label>
          </div>
          <div className="mb-2">
            <input
              type="radio"
              id="Spritual"
              value="Spritual"
              checked={categoryId === "Spritual"}
              onChange={updateCategory}
              className="mr-2"
            />
            <label htmlFor="category2" className="cursor-pointer">
              Spritual
            </label>
          </div>
        </div>

        {/* Product Display */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Collection;
