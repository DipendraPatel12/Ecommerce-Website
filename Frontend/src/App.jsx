import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx"; // Import Home component
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import UploadProduct from "./components/UploadProduct.jsx";

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      <Toaster />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/category/:categoryId?" element={<Collection />} />
        <Route path="/products/:productId" element={<ProductDetail />} />

        {/* Admin Dashboard Route */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/add-product" element={<UploadProduct />} />
      </Routes>
    </>
  );
}

export default App;
