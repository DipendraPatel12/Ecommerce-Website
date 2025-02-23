import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx"; // Import Home component
import { Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { Toaster } from "react-hot-toast";
function App() {
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
      </Routes>
    </>
  );
}

export default App;
